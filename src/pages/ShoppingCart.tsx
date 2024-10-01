import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import { client } from '../apolloClient';
import {
  UPDATE_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  GET_CART_ITEMS,
  GET_PRODUCT_BY_ID,
} from '../graphql/cart';

interface CartItem {
  productId: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const orderId = 'currentOrderId'; // Replace with actual orderId
  const navigate = useNavigate(); // Initialize the navigation hook

  // Fetch cart items
  const { loading, error, data } = useQuery(GET_CART_ITEMS, {
    variables: { orderId },
  });

  const [cartItems, setCartItems] = useState<(CartItem & { product?: Product })[]>([]);

  // Fetch product details for each cart item
  const fetchProductsDetails = async (cartItems: CartItem[]) => {
    return Promise.all(
      cartItems.map(async (item) => {
        const { data } = await client.query({
          query: GET_PRODUCT_BY_ID,
          variables: { id: item.productId },
        });
        return { ...item, product: data.getProduct };
      })
    );
  };

  useEffect(() => {
    const loadCartItems = async () => {
      if (data && data.listOrderProducts) {
        const itemsWithDetails = await fetchProductsDetails(data.listOrderProducts.items);
        setCartItems(itemsWithDetails);
      }
    };

    loadCartItems();
  }, [data]);

  const [updateCart] = useMutation(UPDATE_CART);
  const [removeFromCart] = useMutation(REMOVE_FROM_CART);
  const [checkout] = useMutation(CHECKOUT);

  const handleUpdateCart = async (productId: string, quantity: number) => {
    if (quantity <= 0) return;
    try {
      await updateCart({
        variables: { orderId, productId, quantity },
        refetchQueries: [{ query: GET_CART_ITEMS, variables: { orderId } }],
      });
    } catch (err) {
      console.error('Error updating cart:', err);
    }
  };

  const handleRemoveFromCart = async (productId: string) => {
    try {
      await removeFromCart({
        variables: { orderId, productId },
        refetchQueries: [{ query: GET_CART_ITEMS, variables: { orderId } }],
      });
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await checkout({ variables: { orderId } });

      if (response.data.checkout.success) {
        alert('Checkout successful!');
        setCartItems([]); // Clear cart after successful checkout

        // Navigate to the checkout page after successful checkout
        navigate('/checkout');
      }
    } catch (err) {
      console.error('Error during checkout:', err);
    }
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart: {error.message}</p>;

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <h3>{item.product?.name}</h3>
              <p>Price: ${item.product?.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateCart(item.productId, Number(e.target.value))}
                min={1}
              />
              <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
