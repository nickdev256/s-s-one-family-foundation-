import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabase";

export default function ProtectedRoute({
  children
}) {
  const [loading, setLoading] =
    useState(true);

  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const {
      data: { session }
    } = await supabase.auth.getSession();

    setAuthenticated(!!session);

    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated
    ? children
    : <Navigate to="/admin" />;
}