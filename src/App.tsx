// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import  Auth from '@aws-amplify/auth'; 
// // import { useState } from 'react';
// import AdminDashboard from './AdminDashboard';
// import UserDashboard from './UserDashboard';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import ProductPage from './pages/Productpage';
// import ProductListing from './components/ProductListing';
// import ProductDetail from './components/ProductDetail';
// import ShoppingCart from './pages/ShoppingCart';
// import CheckoutPage from './components/CheckoutPage';
// // import type { AppProps } from 'next/app';
// import { Authenticator } from '@aws-amplify/ui-react';
// import { Amplify } from 'aws-amplify';
// import outputs from '../amplify_outputs.json';
// import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(outputs);




// export default function App() {
//   return (
//     <Authenticator>
//        <Router>
//       <Routes>
//       <Route path="/"  element={<ProductListing />} />
//       <Route path="/cart" element={<ShoppingCart />} />
//       <Route path="/checkout" element={<CheckoutPage />} />
//       <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* <Route path="/dashboard" element={<ProtectedRoute />} /> */}
//         <Route path="/admin" element={<AdminDashboard />} />
      
//         {/* <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} /> */}
//         <Route path="/productpage" element={<ProductPage />} />
//         <Route path="/user" element={<UserDashboard />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//     </Authenticator>
//   );
// }


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';
// import UserDashboard from './UserDashboard';
// import Login from './pages/Login';
import Signup from './pages/Signup';
// // import ProductPage from './pages/Productpage';
import AdminProductPage from './AdminProductPage';
// import ProductListing from './components/ProductListing';
// import ProductDetail from './components/ProductDetail';
// import ShoppingCart from './pages/ShoppingCart';
// import CheckoutPage from './components/CheckoutPage';
// Removed Authenticator import
// import { Authenticator } from '@aws-amplify/ui-react'; 
// import { Amplify } from 'aws-amplify';
// import outputs from '../amplify_outputs.json';
// import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(outputs); // Removed Amplify configuration

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
       
        {/* Removed admin route if not needed */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path='/' element={<AdminProductPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/productpage" element={<ProductPage />} /> */}
        {/* <Route path="/user" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/" />} /> Redirect to home instead of login */}
      </Routes>
    </Router>
  );
}