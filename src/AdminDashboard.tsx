import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useAppSyncClient } from '@aws-amplify/api';
import { Grid, Button, Form, Image } from 'semantic-ui-react';
import { gql } from 'graphql-tag';

interface Product {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
}

interface NewProduct {
  name: string;
  description: string;
  image: File | null;
}

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<NewProduct>({ name: '', description: '', image: null });
  const appSyncClient = useAppSyncClient();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await appSyncClient.query({
      query: gql`
        query GetProducts {
          products {
            id
            name
            description
            image {
              url
            }
          }
        }
      `,
    });
    setProducts(response.data.products);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewProduct({ ...newProduct, image: event.target.files[0] });
    }
  };

  const handleCreateProduct = async () => {
    const response = await appSyncClient.mutate({
      mutation: gql`
        mutation CreateProduct($input: CreateProductInput!) {
          createProduct(input: $input) {
            id
            name
            description
            image {
              url
            }
          }
        }
      `,
      variables: { input: newProduct },
    });
    setProducts([...products, response.data.createProduct]);
    setNewProduct({ name: '', description: '', image: null });
  };

  return (
    <Grid columns={2}>
      <Grid.Column>
        <h1>Product Management</h1>
        <Form>
          <Form.Field>
            <label>Product Name</label>
            <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Product Description</label>
            <textarea value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Product Image</label>
            <input type="file" onChange={handleImageChange} />
          </Form.Field>
          <Button type="submit" onClick={handleCreateProduct}>Create Product</Button>
        </Form>
      </Grid.Column>
      <Grid.Column>
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Image src={product.image.url} size="small" />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      </Grid.Column>
    </Grid>
  );
};

export default AdminDashboard;