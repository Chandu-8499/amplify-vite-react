// import React, { useState, useEffect } from 'react';
// import { Grid, Image, Button } from 'semantic-ui-react';
// import { useAppSyncClient } from '@aws-amplify/api';
// import { gql } from 'graphql-tag';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   image: {
//     url: string;
//   };
//   price: number;
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const appSyncClient = useAppSyncClient();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await appSyncClient.query({
//       query: gql`
//         query GetProducts {
//           products {
//             id
//             name
//             description
//             image {
//               url
//             }
//             price
//           }
//         }
//       `,
//     });
//     setProducts(response.data.products);
//   };

//   return (
//     <Grid columns={3}>
//       {products.map((product) => (
//         <Grid.Column key={product.id}>
//           <Image src={product.image.url} size="small" />
//           <h4>{product.name}</h4>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <Button>Add to Cart</Button>
//         </Grid.Column>
//       ))}
//     </Grid>
//   );
// };

// export default ProductList;