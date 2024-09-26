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

  // Form state for creating or editing a product
  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  // State to track whether the form is in "edit" mode and which product is being edited
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Show loading or error states if necessary
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Create a new product
  const handleCreateProduct = async () => {
    await createProduct({
      variables: { input: productForm },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
    setProductForm({ name: '', description: '', price: 0, stock: 0 }); // Reset form
  };

  // Update an existing product
  const handleUpdateProduct = async () => {
    if (editingProductId) {
      await updateProduct({
        variables: { input: { id: editingProductId, ...productForm } },
        refetchQueries: [{ query: GET_PRODUCTS }],
      });
      setProductForm({ name: '', description: '', price: 0, stock: 0 }); // Reset form
      setIsEditMode(false); // Exit edit mode
      setEditingProductId(null);
    }
  };

  // Prepare form for editing an existing product
  const handleEditClick = (product: Product) => {
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
    setIsEditMode(true); // Switch to edit mode
    setEditingProductId(product.id); // Set the product to be edited
  };

  // Delete a product
  const handleDeleteProduct = async (id: string) => {
    await deleteProduct({
      variables: { id },
      refetchQueries: [{ query: GET_PRODUCTS }],
    });
  };

  return (
    <div>
      <h1>Product Page</h1>

      {/* Product form for creating or editing */}
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
        <button type="submit">
          {isEditMode ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* List of existing products */}
      <h2>Existing Products</h2>
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
