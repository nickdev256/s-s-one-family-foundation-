import { supabase } from "../config/supabase.js";

export const verifyAuth = async (
  req,
  res,
  next
) => {

  try {

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {

      return res.status(401).json({
        success: false,
        message:
          "Authentication required"
      });

    }

    const token =
      authHeader.split(" ")[1];

    const {
      data: { user },
      error
    } =
    await supabase.auth.getUser(
      token
    );

    if (
      error ||
      !user
    ) {

      return res.status(401).json({
        success: false,
        message:
          "Invalid token"
      });

    }

    req.user = user;

    next();

  }

  catch (error) {

    return res.status(500).json({
      success: false,
      message:
        "Authentication failed"
    });

  }

};

export const verifyAdmin = async (
  req,
  res,
  next
) => {

  try {

    const {
      data: admin,
      error
    } =
    await supabase
      .from("admins")
      .select("*")
      .eq(
        "email",
        req.user.email
      )
      .single();

    if (
      error ||
      !admin
    ) {

      return res.status(403).json({
        success: false,
        message:
          "Admin access required"
      });

    }

    req.admin = admin;

    next();

  }

  catch {

    return res.status(500).json({
      success: false,
      message:
        "Admin verification failed"
    });

  }

};