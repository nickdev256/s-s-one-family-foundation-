import "./GalleryManager.css";

import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  FaImages,
  FaVideo,
  FaTrash,
  FaPlus,
  FaSpinner
} from "react-icons/fa";

import { supabase } from "../../lib/supabase";

export default function GalleryManager() {

  const [loading, setLoading] = useState(true);

  const [photos, setPhotos] = useState([]);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {

    try {

      const res = await fetch(
        "http://localhost:5000/api/gallery"
      );

      const data = await res.json();

      if (data.success) {

        setPhotos(
          data.gallery.filter(
            item => item.type === "image"
          )
        );

        setVideos(
          data.gallery.filter(
            item => item.type === "video"
          )
        );
      }

    } finally {

      setLoading(false);

    }
  }

  async function uploadPhotos(e) {

    const files = Array.from(e.target.files);

    for (const file of files) {

      const filename =
        `${Date.now()}-${file.name}`;

      const { error } =
        await supabase.storage
          .from("gallery-images")
          .upload(filename, file);

      if (error) continue;

      const {
        data: publicUrl
      } = supabase.storage
        .from("gallery-images")
        .getPublicUrl(filename);

      await supabase
        .from("gallery")
        .insert([
          {
            type: "image",
            name: file.name,
            url: publicUrl.publicUrl
          }
        ]);
    }

    loadGallery();
  }

  async function uploadVideos(e) {

    const files = Array.from(e.target.files);

    for (const file of files) {

      const filename =
        `${Date.now()}-${file.name}`;

      const { error } =
        await supabase.storage
          .from("gallery-videos")
          .upload(filename, file);

      if (error) continue;

      const {
        data: publicUrl
      } = supabase.storage
        .from("gallery-videos")
        .getPublicUrl(filename);

      await supabase
        .from("gallery")
        .insert([
          {
            type: "video",
            name: file.name,
            url: publicUrl.publicUrl
          }
        ]);
    }

    loadGallery();
  }

  async function deleteMedia(id) {

    await fetch(
      `http://localhost:5000/api/gallery/${id}`,
      {
        method: "DELETE"
      }
    );

    loadGallery();
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="loading-box">
          <FaSpinner className="spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* keep your existing UI */}

    </AdminLayout>
  );
}