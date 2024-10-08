import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { LIST_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './graphql';
import { uploadData, getUrl } from 'aws-amplify/storage';
import './pages/AdminProductPage.css'; 

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
}

const AdminProductPage: React.FC = () => {
  // Fetch the list of products
  const { loading, error, data } = useQuery(LIST_PRODUCTS);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show loading/error states if applicable
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to handle file uploads to S3
  const handleFileUpload = async (file: File): Promise<string | undefined> => {
    try {
      const key = `product-images/${file.name}`;

      // Upload the file
      await uploadData({
        path: key,
        data: file,
      });

      // Retrieve the URL for the uploaded file
      const result = await getUrl({ key });
      const urlString = result.url.toString(); // Convert URL to string

      return urlString;
    } catch (error) {
      console.error('Error uploading file:', error);
      return undefined;
    }
  };

  // Function to handle form submission (create or update)
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
        refetchQueries: [{ query: LIST_PRODUCTS }] 
      });
      setIsEditMode(false);
      setEditingProductId(null);
    } else {
      await createProduct({ 
        variables: { input }, 
        refetchQueries: [{ query: LIST_PRODUCTS }] 
      });
    }
    setProductForm({ name: '', description: '', price: 0, stock: 0, image: '' });
    setFile(null);
    setIsModalOpen(false);
  };

  // Handle editing a product
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
    setIsModalOpen(true);
  };

  // Handle deleting a product
  const handleDeleteProduct = async (id: string) => {
    await deleteProduct({ 
      variables: { input: { id } }, 
      refetchQueries: [{ query: LIST_PRODUCTS }] 
    });
  };

  // Open the modal for adding a new product
  const openCreateProductModal = () => {
    setIsEditMode(false);
    setProductForm({ name: '', description: '', price: 0, stock: 0, image: '' });
    setIsModalOpen(true);
  };

  return (
    <div className="admin-product-page">
      <div className="header">
        <h1>Admin Product Management</h1>
        <button className="btn primary" onClick={openCreateProductModal}>Add New Product</button>
      </div>

      <div className="product-grid">
        {data.listProducts.items.map((product: Product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || 'https://via.placeholder.com/300'}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <div className="product-actions">
                <button className="btn small" onClick={() => handleEditClick(product)}>Edit</button>
                <button className="btn small danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditMode ? 'Edit Product' : 'Add New Product'}</h2>
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
              <textarea
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
              <button type="submit" className="btn primary">{isEditMode ? 'Update Product' : 'Create Product'}</button>
              <button type="button" className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductPage;
