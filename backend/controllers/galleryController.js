import { supabase } from "../config/supabaseClient.js";

/* ================================
GET GALLERY
================================ */

export const getGallery = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("gallery")
      .select("*");

    if (error) throw error;

    return res.status(200).json({
      success: true,
      gallery: data || [],
    });

  } catch (error) {

    console.error(
      "Gallery Fetch Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================================
UPLOAD MEDIA
================================ */

export const uploadMedia = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const type = req.body.type;

    const bucket =
      type === "video"
        ? "gallery-videos"
        : "gallery-images";

    const filename =
      `${Date.now()}-${req.file.originalname}`;

    const { error: uploadError } =
      await supabase.storage
        .from(bucket)
        .upload(
          filename,
          req.file.buffer,
          {
            contentType:
              req.file.mimetype,
          }
        );

    if (uploadError)
      throw uploadError;

    const { data: publicUrl } =
      supabase.storage
        .from(bucket)
        .getPublicUrl(filename);

    const { data, error } =
      await supabase
        .from("gallery")
        .insert([
          {
            name:
              req.file.originalname,
            url:
              publicUrl.publicUrl,
            type,
          },
        ])
        .select();

    if (error) throw error;

    return res.status(201).json({
      success: true,
      media: data[0],
    });

  } catch (error) {

    console.error(
      "Gallery Upload Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================================
DELETE MEDIA
================================ */

export const deleteMedia = async (
  req,
  res
) => {
  try {

    const { id } = req.params;

    const { error } =
      await supabase
        .from("gallery")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return res.status(200).json({
      success: true,
      message:
        "Media deleted successfully",
    });

  } catch (error) {

    console.error(
      "Gallery Delete Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};