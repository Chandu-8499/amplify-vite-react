import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import  Auth from '@aws-amplify/auth'; 
// import { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/Productpage';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from './components/CheckoutPage';
// import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);


// import Checkout from './Checkout';
// import jwtDecode from 'jwt-decode';
// import CognitoUser from 'amazon-cognito-identity-js';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/"  element={<ProductListing />} />
//       <Route path="/cart" element={<ShoppingCart />} />
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
//   );
// }

// export default App;


export default function App() {
  return (
    <Authenticator>
       <Router>
      <Routes>
      <Route path="/"  element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<ProtectedRoute />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
      
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </Authenticator>
  );
}
// const ProtectedRoute = async () => {
//   const [userGroup, setUserGroup] = useState<string | null>(null);
//   const navigate = useNavigate();
  
  // const cj = await Auth.fetchAuthSession();
  // const sessionIdInfo = jwtDecode( cj.tokens?.idToken ?? '');
  // console.log(sessionIdInfo['cognito:groups'])
  // useEffect(() => {
    
    
  //   const c = await Auth.getCurrentUser()
  //     .then( () => {
  //       const groups: string[] = user.getSignInUserSession()?.getAccessToken()?.payload['cognito:groups'] || [];
  //       if (groups.includes('Admin')) {
  //         setUserGroup('Admin');
  //         navigate('/admin');
  //       } else {
  //         setUserGroup('User');
  //         navigate('/user');
  //       }
  //     })
  //     .catch((err: Error) => {
  //       console.error(err);
  //       navigate('/login');
  //     });
  // }, [navigate]);

  // return (
  //   <div>
  //     {userGroup === 'Admin' && <p>Welcome, Admin!</p>}
  //     {userGroup === 'User' && <p>Welcome, User!</p>}
  //   </div>
  // );
// }