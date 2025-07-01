import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Import all authentication-related components
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'
import ResetPasswordPage from './pages/ResetPassword';
import UpdateUsername from './pages/UpdateUsername';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import SubscriptionCheckout from './pages/Subscription';

// ScrollToTop component that uses the useLocation hook to 
// detect route changes and scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Protected route wrapper component
const ProtectedRoute = ({ children }) => {
  const hasToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
  if (!hasToken) {
    return <Navigate to="/login" replace state={{ message: 'Please login to access this page' }} />;
  }
  return children;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists and update authentication state
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
    
    // Set up event listener for storage changes (e.g., when another tab logs out)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return (
    <Router>
      {/* Include ScrollToTop component inside Router but outside Routes */}
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/" element={<ResetPasswordPage />} />
        
        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile onLogout={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-username"
          element={
            <ProtectedRoute>
              <UpdateUsername />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription/checkout"
          element={
            <ProtectedRoute>
              <SubscriptionCheckout />
            </ProtectedRoute>
          }
        />
        
        {/* Catch-all route for 404 - Page Not Found */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-pink-100">
              <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page not found</p>
                <a
                  href="/"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg inline-block hover:shadow-lg transition-all duration-300"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;