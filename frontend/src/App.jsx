import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetPostsQuery, useGetPostsMutation } from "Services/jsonPlaceholderApi";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  const { data, error, isloading } = useGetPostsQuery();
  
  if(isloading) return <p>Loading...</p>;

  if(error) return <p>There was an error...</p>;
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
