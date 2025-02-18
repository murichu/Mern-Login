import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAppContext();

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;