import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../graphql';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const ProductPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  // Track the product form state for creating/updating
  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Handle creating a new product
  const handleCreateProduct = async () => {
    await createProduct({
      variables: { input: productForm },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
    setProductForm({ name: '', description: '', price: 0, stock: 0 });
  };

  // Handle updating an existing product
  const handleUpdateProduct = async () => {
    if (editingProductId) {
      await updateProduct({
        variables: { input: { id: editingProductId, ...productForm } },
        refetchQueries: [{ query: GET_PRODUCTS }],
      });
      setProductForm({ name: '', description: '', price: 0, stock: 0 });
      setIsEditMode(false);
      setEditingProductId(null);
    }
  };

  // Prepare form to edit an existing product
  const handleEditClick = (product: Product) => {
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
    setIsEditMode(true);
    setEditingProductId(product.id);
  };

  // Handle deleting a product
  const handleDeleteProduct = async (id: string) => {
    await deleteProduct({
      variables: { id },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  return (
    <div>
      <h1>Product Page</h1>

      {/* Product form */}
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
        <button type="submit">{isEditMode ? 'Update Product' : 'Add Product'}</button>
      </form>

      {/* Product list */}
      <ul>
        {data.listProducts.items.map((product: Product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleEditClick(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
