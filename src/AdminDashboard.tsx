import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Grid, Button, Form, Image } from 'semantic-ui-react';
import  Storage  from '@aws-amplify/storage'; // Corrected import for Storage
import { generateClient } from 'aws-amplify/data';
// import awsConfig from './aws-exports';
import type { Schema } from '../amplify/data/resource';

// Define the Product type based on your schema
interface Product {
  id: string;
  name: string;
  description?: string; // Optional
  price: number;
  image?: {
    url: string; // Assuming we are storing image URLs
  };
  createdAt: string;
  updatedAt: string;
}

// Define the input structure for a new product
interface NewProduct {
  name: string;
  description?: string; // Optional
  price: number;
  image: File | null;
}

// Initialize the Amplify Data Client
const client = generateClient<Schema>();

const AdminDashboard: React.FC = () => {
  const queryClient = useQueryClient();

  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: '',
    description: '',
    price: 0,
    image: null,
  });

  // Fetch Products using useQuery
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'], // Pass queryKey in an object
    queryFn: async () => {
      const response = await client.models.Product.list();
      return response.data?.items ?? []; // Handle possible undefined data
    },
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
      price: product.price,
      image: imageUrl ? { url: imageUrl } : null, // Attach the image URL if available
    });

    return response.data;
  }, {
    onSuccess: () => {
      // Invalidate and refetch the product list after a successful mutation
      queryClient.invalidateQueries({ queryKey: ['products'] }); // Correct invalidateQueries syntax
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewProduct({ ...newProduct, image: event.target.files[0] });
    }
  };

  const handleCreateProduct = () => {
    // Trigger mutation to create product
    createProductMutation.mutate(newProduct);
    setNewProduct({ name: '', description: '', price: 0, image: null });
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
            <label>Product Price</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
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
            {products.map((product: Product) => (
              <li key={product.id}>
                {product.image && <Image src={product.image.url} size="small" />}
                <span>{product.name} - ${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default AdminDashboard;
