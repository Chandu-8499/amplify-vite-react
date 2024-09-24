import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

interface Props {
  onPlaceOrder: () => void;
}

const Checkout: React.FC<Props> = ({ onPlaceOrder }) => {
  return (
    <Grid columns={1}>
      <Grid.Column>
        <h2>Checkout</h2>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input type="text" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input type="text" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input type="text" />
          </Form.Field>
          <Button type="submit" onClick={onPlaceOrder}>Place Order</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Checkout;