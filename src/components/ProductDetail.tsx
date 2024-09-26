import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// GraphQL Query to fetch a single product by ID
const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      image
    }
  }
`;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Get the product ID from the URL
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product details: {error.message}</p>;

  const product = data.getProduct;

  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
