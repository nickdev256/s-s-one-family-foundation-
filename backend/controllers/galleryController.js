import { supabase } from "../config/supabase.js";

export const getGallery = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", {
        ascending: false
      });

    if (error) throw error;

    res.json({
      success: true,
      gallery: data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const deleteMedia = async (req, res) => {
  try {

    const { id } = req.params;

    const { error } = await supabase
      .from("gallery")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};