import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';  // Import the Product type

// GraphQL Query to list products
const LIST_PRODUCTS = gql`
  query ListProducts {
    listProducts {
      items {
        id
        name
        price
        image
      }
    }
  }
`;

const ProductListing: React.FC = () => {
  const { loading, error, data } = useQuery<{ listProducts: { items: Product[] } }>(LIST_PRODUCTS);  // Use the Product type

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {data?.listProducts.items.map((product: Product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
