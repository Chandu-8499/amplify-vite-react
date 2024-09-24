import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product[];
  onCheckout: () => void;
}

const Cart: React.FC<Props> = ({ products, onCheckout }) => {
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(totalAmount);
  }, [products]);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <h2>Cart</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <span>{product.name} x {product.quantity}</span>
              <span>${product.price * product.quantity}</span>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
        <Button onClick={onCheckout}>Checkout</Button>
      </Grid.Column>
    </Grid>
  );
};

export default Cart;