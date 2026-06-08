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

const {
  data: authListener
} =
supabase.auth.onAuthStateChange(
  async () => {

    checkAccess();

  }
);

return () => {

  authListener.subscription.unsubscribe();

};


}, []);

async function checkAccess() {


try {

  setLoading(true);

  const {
    data: { session }
  } =
  await supabase.auth.getSession();

  if (!session) {

    setAuthorized(false);
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
  .select("email, role")
  .eq(
    "email",
    email
  )
  .single();

  if (
    error ||
    !admin
  ) {

    await supabase.auth.signOut();

    setAuthorized(false);

    return;

  }

  setAuthorized(true);

}

catch {

  setAuthorized(false);

}

finally {

  setLoading(false);

}


}

if (loading) {


return (

  <div
    style={{
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0f172a",
      color:"#fff",
      fontSize:"1rem",
      fontWeight:"600"
    }}
  >

    Checking Access...

  </div>

);


}

if (!authorized) {


return (
  <Navigate
    to="/admin"
    replace
  />
);


}

return children;

}
