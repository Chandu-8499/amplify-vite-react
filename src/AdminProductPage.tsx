// src/components/AdminProductPage.tsx
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './graphql/products';
import { ChangeEvent, FormEvent } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const AdminProductPage: React.FC = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [formData, setFormData] = useState<Product>({ id: '', name: '', description: '', price: 0, stock: 0 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'price' || name === 'stock' ? parseInt(value) : value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.id) {
      // Update product
      await updateProduct({ variables: { ...formData, price: parseFloat(formData.price.toString()), stock: parseInt(formData.stock.toString()) } });
    } else {
      // Add new product
      await addProduct({ variables: { ...formData, price: parseFloat(formData.price.toString()), stock: parseInt(formData.stock.toString()) } });
    }
    setFormData({ id: '', name: '', description: '', price: 0, stock: 0 });
  };

  const handleEdit = (product: Product) => {
    setFormData(product);
  };

  const handleDelete = async (id: string) => {
    await deleteProduct({ variables: { id } });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Product Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={formData.id} />
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
        <button type="submit">{formData.id ? 'Update Product' : 'Add Product'}</button>
      </form>

      <h2>Product List</h2>
      <ul>
        {data.listProducts.items.map((product: Product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductPage;
