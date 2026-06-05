import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ProtectedRoute({
  children
}) {

  const [loading, setLoading] =
    useState(true);

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {

    checkAccess();

  }, []);

  async function checkAccess() {

    try {

      const {
        data: { session }
      } =
      await supabase.auth.getSession();

      if (!session) {

        setAuthorized(false);
        setLoading(false);

        return;

      }

      const email =
        session.user.email;

      const {
        data: admin,
        error
      } =
      await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .single();

      if (error || !admin) {

        await supabase.auth.signOut();

        setAuthorized(false);

      } else {

        setAuthorized(true);

      }

    }

    catch (err) {

      setAuthorized(false);

    }

    setLoading(false);

  }

  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2rem",
          fontWeight: "600"
        }}
      >
        Loading...
      </div>

    );

  }

  return authorized
    ? children
    : <Navigate to="/admin" replace />;

}