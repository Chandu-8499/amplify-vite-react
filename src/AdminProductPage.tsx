import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './graphql/products';
import { ChangeEvent, FormEvent } from 'react';
import { uploadData } from 'aws-amplify/storage';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl?: string; // Optional field for the image URL
}

const AdminProductPage: React.FC = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [formData, setFormData] = useState<Product>({ id: '', name: '', description: '', price: 0, stock: 0 });
  const [imageFile, setImageFile] = useState<File | null>(null); // File selected for upload

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'price' || name === 'stock' ? parseInt(value) : value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]); // Store selected file
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let imageUrl = '';

    if (imageFile) {
      try {
        // Upload the image to S3 using uploadData
        const result = await uploadData({
          path: `product-pictures/${formData.name}/${imageFile.name}`, // Use product name to create a unique path
          data: imageFile, // The file to upload
        });

        // Log the result to see its structure
        console.log(result);

        // Construct the S3 URL using the correct key
        const bucketName = '<your-bucket-name>'; // Replace with your bucket name
        const region = '<your-region>'; // Replace with your region
        imageUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${result}`; // Update to use the correct property
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    }

    if (formData.id) {
      await updateProduct({
        variables: {
          id: formData.id,
          name: formData.name,
          description: formData.description,
          price: formData.price,
          stock: formData.stock,
          imageUrl, // Pass the image URL
        },
      });
    } else {
      await addProduct({
        variables: {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          stock: formData.stock,
          imageUrl, // Pass the image URL
        },
      });
    }

    setFormData({ id: '', name: '', description: '', price: 0, stock: 0 });
    setImageFile(null); // Clear file input after submission
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Product Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />

        {/* File input for uploading image */}
        <input type="file" accept="image/*" onChange={handleFileChange} />

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
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />}
            <button onClick={() => setFormData(product)}>Edit</button>
            <button onClick={() => deleteProduct({ variables: { id: product.id } })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductPage;
