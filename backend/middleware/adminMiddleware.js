import { supabase } from "../config/supabase.js";

export const verifyAdmin = async (
  req,
  res,
  next
) => {
  try {
    const { data } = await supabase
      .from("admins")
      .select("*")
      .eq("user_id", req.user.id)
      .single();

    if (!data) {
      return res.status(403).json({
        success: false,
        message: "Admin access only"
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};