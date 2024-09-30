import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../graphql';
import { ADD_TO_CART } from '../graphql/cart';
import { Storage } from 'aws-amplify/storage'; 

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string; // Optional field for image URL
}

const ProductPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [addToCart] = useMutation(ADD_TO_CART); // Add mutation for adding product to cart

  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image: '', // New field for storing image URL
  });

  const [imageFile, setImageFile] = useState<File | null>(null); // New state for image file
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Handle image upload
  const handleImageUpload = async (file: File) => {
    try {
      const result = await Storage.put(`products/${file.name}`, file, {
        contentType: file.type, // Ensure the content type is correct
      });
      const imageUrl = await Storage.get(result.key); // Get the image URL after uploading
      return imageUrl;
    } catch (err) {
      console.error('Error uploading image:', err);
      return '';
    }
  };

  // Handle product creation with image upload
  const handleCreateProduct = async () => {
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
    }
    await createProduct({
      variables: { input: { ...productForm, image: imageUrl } },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
    setProductForm({ name: '', description: '', price: 0, stock: 0, image: '' });
    setImageFile(null); // Reset image file after submission
  };

  // Handle product update with image upload
  const handleUpdateProduct = async () => {
    let imageUrl = productForm.image; // Use existing image URL if not uploading a new one
    if (imageFile) {
      imageUrl = await handleImageUpload(imageFile);
    }
    if (editingProductId) {
      await updateProduct({
        variables: { input: { id: editingProductId, ...productForm, image: imageUrl } },
        refetchQueries: [{ query: GET_PRODUCTS }],
      });
      setProductForm({ name: '', description: '', price: 0, stock: 0, image: '' });
      setIsEditMode(false);
      setEditingProductId(null);
      setImageFile(null); // Reset image file
    }
  };

  const handleEditClick = (product: Product) => {
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image || '', // Populate form with existing image URL if available
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
          if (isEditMode) {
            handleUpdateProduct();
          } else {
            handleCreateProduct();
          }
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

        {/* Image input for product image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) setImageFile(e.target.files[0]);
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
            {product.image && <img src={product.image} alt={product.name} width="100" />} {/* Display product image */}
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
