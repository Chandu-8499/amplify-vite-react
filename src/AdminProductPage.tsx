import React, { useState, useEffect } from 'react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { getUrl } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';

interface Product {
  id: string;
  name: string;
  description: string;
  imageKey?: string;
  imageUrl?: string;
}

const AdminProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImageKey, setProductImageKey] = useState<string | undefined>(undefined);
  const [productImageURL, setProductImageURL] = useState<string | undefined>(undefined);

  const generateUniqueId = () => `product_${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (productImageKey) {
      const fetchImageUrl = async () => {
        try {
          const { url } = await getUrl({ path: productImageKey });
          setProductImageURL(url.toString()); // Convert URL object to string
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
      fetchImageUrl();
    }
  }, [productImageKey]);

  const handleAddProduct = () => {
    const productId = generateUniqueId();
    const newProduct: Product = {
      id: productId,
      name: productName,
      description: productDescription,
      imageKey: productImageKey,
      imageUrl: productImageURL,
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductDescription('');
    setProductImageKey(undefined);
    setProductImageURL(undefined);
  };

  const handleUploadSuccess = async (event: { key?: string }) => {
    if (!event.key) {
      console.error('Upload success event missing key');
      return;
    }
    
    try {
      // Set the product image key after successful upload
      setProductImageKey(event.key);
    } catch (error) {
      console.error('Error handling upload success:', error);
    }
  };

  return (
    <div>
      <h2>Admin Product Page</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Product Description:</label>
        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>

      <div>
        <h3>Upload Product Image</h3>
        <FileUploader
          acceptedFileTypes={['image/*']}
          path="product-pictures/"
          maxFileCount={1}
          isResumable
          onUploadSuccess={handleUploadSuccess} // Passes the event object with 'key'
          onUploadError={(error) => {
            console.error('Upload error:', error);
          }}
        />
      </div>

      {productImageURL && (
        <div>
          <h4>Product Image Preview:</h4>
          <img src={productImageURL} alt="Product" style={{ width: '200px' }} />
        </div>
      )}

      <button onClick={handleAddProduct}>Add Product</button>

      <h3>Products List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductPage;
