import { supabase } from "../config/supabase.js";

export const getPageContent = async (req, res) => {
  try {
    const { page } = req.params;

    const { data, error } = await supabase
      .from("cms_content")
      .select("*")
      .eq("page", page);

    if (error) throw error;

    res.status(200).json({
      success: true,
      content: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updatePageContent = async (req, res) => {
  try {

    const { page } = req.params;

    const {
      section,
      title,
      content,
      image_url
    } = req.body;

    const { data, error } = await supabase
      .from("cms_content")
      .upsert([
        {
          page,
          section,
          title,
          content,
          image_url,
          updated_at: new Date()
        }
      ])
      .select();

    if (error) throw error;

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};