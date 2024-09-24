import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Grid, Button, Form, Image } from 'semantic-ui-react';
import { Storage } from 'aws-amplify';
import { generateClient } from "aws-amplify/data";
import awsConfig from './aws-exports';
import type { Schema } from "@/amplify/data/resource";

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

// Initialize the Amplify Data Client
const client = generateClient<Schema>();

const AdminDashboard: React.FC = () => {
  const queryClient = useQueryClient();

  const [newProduct, setNewProduct] = useState<NewProduct>({ name: '', description: '', image: null });

  // Fetch Products using useQuery
  const { data: products, isLoading: isLoadingProducts } = useQuery(['products'], async () => {
    const response = await client.models.Product.list();
    return response.data.items; // Assuming response.data.items has the products
  });

  // Mutation to create a new product
  const createProductMutation = useMutation(async (product: NewProduct) => {
    let imageUrl = '';

    if (product.image) {
      // Upload image to S3 using AWS Amplify Storage
      const result = await Storage.put(product.image.name, product.image);
      imageUrl = result.key; // S3 key for the image
    }

    // Create the product in DynamoDB
    const response = await client.models.Product.create({
      name: product.name,
      description: product.description,
      image: imageUrl ? { url: imageUrl } : null,
    });
    
    return response.data;
  }, {
    onSuccess: () => {
      // Invalidate and refetch the product list after a successful mutation
      queryClient.invalidateQueries(['products']);
    }
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewProduct({ ...newProduct, image: event.target.files[0] });
    }
  };

  const handleCreateProduct = () => {
    // Trigger mutation to create product
    createProductMutation.mutate(newProduct);
    setNewProduct({ name: '', description: '', image: null });
  };

  return (
    <Grid columns={2}>
      <Grid.Column>
        <h1>Product Management</h1>
        <Form>
          <Form.Field>
            <label>Product Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Product Description</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Product Image</label>
            <input type="file" onChange={handleImageChange} />
          </Form.Field>
          <Button type="submit" onClick={handleCreateProduct} loading={createProductMutation.isLoading}>
            Create Product
          </Button>
        </Form>
      </Grid.Column>

      <Grid.Column>
        <h1>Product List</h1>
        {isLoadingProducts ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products?.map((product: Product) => (
              <li key={product.id}>
                <Image src={product.image.url} size="small" />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default AdminDashboard;
