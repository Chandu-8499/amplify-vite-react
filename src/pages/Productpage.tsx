import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../graphql';
import { ADD_TO_CART } from '../graphql/cart';
import { uploadData, getUrl } from 'aws-amplify/storage';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
}

const ProductPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [addToCart] = useMutation(ADD_TO_CART);

  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Upload the file to S3 using uploadData and get the URL using getUrl
  const handleFileUpload = async (file: File): Promise<string | undefined> => {
    try {
      const key = `product-pictures/${file.name}`;
      const uploadTask = uploadData({ path: key, data: file });
      await uploadTask.result; // Wait for the upload to complete

      // Get the URL of the uploaded file
      const { url } = await getUrl({ key }); // Destructure to get the URL
      return url.toString(); // Convert the URL object to a string
    } catch (error) {
      console.error('Error uploading file:', error);
      return undefined;
    }
  };

  const handleFormSubmit = async () => {
    let imageUrl: string | undefined = productForm.image;
    if (file) {
      imageUrl = await handleFileUpload(file);
      if (!imageUrl) {
        alert('Error uploading image.');
        return;
      }
    }
    const input = { ...productForm, image: imageUrl };
    if (isEditMode && editingProductId) {
      await updateProduct({
        variables: { input: { id: editingProductId, ...input } },
        refetchQueries: [{ query: GET_PRODUCTS }],
      });
      setIsEditMode(false);
      setEditingProductId(null);
    } else {
      await createProduct({
        variables: { input },
        refetchQueries: [{ query: GET_PRODUCTS }],
      });
    }
    setProductForm({ name: '', description: '', price: 0, stock: 0, image: '' });
    setFile(null);
  };

  const handleEditClick = (product: Product) => {
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image || '',
    });
    setIsEditMode(true);
    setEditingProductId(product.id);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct({
      variables: { id },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  const handleAddToCart = async (productId: string) => {
    await addToCart({
      variables: { orderId: 'currentOrderId', productId, quantity: 1 },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  return (
    <div>
      <h1>Product Page</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={productForm.name}
          onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={productForm.description}
          onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={productForm.price}
          onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={productForm.stock}
          onChange={(e) => setProductForm({ ...productForm, stock: Number(e.target.value) })}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button type="submit">
          {isEditMode ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2>Existing Products</h2>
      <ul>
        {data.listProducts.items.map((product: Product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            {product.image && <img src={product.image} alt={product.name} width="100" />}
            <button onClick={() => handleEditClick(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
