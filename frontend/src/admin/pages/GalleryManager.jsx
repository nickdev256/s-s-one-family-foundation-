import "./GalleryManager.css";
import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  FaImages,
  FaVideo,
  FaTrash,
  FaPlus,
  FaSpinner,
  FaSyncAlt,
} from "react-icons/fa";

const API =
  "https://s-s-one-family-foundation.onrender.com";

export default function GalleryManager() {
  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [photos, setPhotos] = useState([]);

  const [videos, setVideos] = useState([]);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
  try {
    setLoading(true);
    setError("");

    console.log(
      "Fetching gallery from:",
      `${API}/api/gallery`
    );

    const response = await fetch(
      `${API}/api/gallery`
    );

    console.log(
      "Response status:",
      response.status
    );

    if (!response.ok) {
      const text =
        await response.text();

      console.error(
        "Server response:",
        text
      );

      throw new Error(
        `Server returned ${response.status}`
      );
    }

    const data =
      await response.json();

    console.log(
      "Gallery data:",
      data
    );

    if (!data.success) {
      throw new Error(
        data.message ||
          "Gallery fetch failed"
      );
    }

    const gallery =
      data.gallery || [];

    setPhotos(
      gallery.filter(
        item =>
          item.type === "image"
      )
    );

    setVideos(
      gallery.filter(
        item =>
          item.type === "video"
      )
    );

  } catch (err) {

    console.error(
      "Gallery Error:",
      err
    );

    setError(
      err.message ||
      "Failed to load gallery"
    );

  } finally {

    setLoading(false);

  }
}

  async function uploadFiles(
    files,
    type
  ) {
    try {
      setUploading(true);
      setProgress(0);
      setError("");
      setSuccess("");

      const allowedImages = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg",
      ];

      const allowedVideos = [
        "video/mp4",
        "video/webm",
        "video/quicktime",
      ];

      for (
        let i = 0;
        i < files.length;
        i++
      ) {
        const file = files[i];

        if (type === "image") {
          if (
            !allowedImages.includes(
              file.type
            )
          ) {
            setError(
              `${file.name} is not a valid image.`
            );
            continue;
          }

          if (
            file.size >
            10 * 1024 * 1024
          ) {
            setError(
              `${file.name} exceeds 10MB limit.`
            );
            continue;
          }
        }

        if (type === "video") {
          if (
            !allowedVideos.includes(
              file.type
            )
          ) {
            setError(
              `${file.name} is not a valid video.`
            );
            continue;
          }

          if (
            file.size >
            100 * 1024 * 1024
          ) {
            setError(
              `${file.name} exceeds 100MB limit.`
            );
            continue;
          }
        }

        const formData =
          new FormData();

        formData.append(
          "file",
          file
        );

        formData.append(
          "type",
          type
        );

        const response =
          await fetch(
            `${API}/api/gallery/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

        const result =
          await response.json();

        if (!result.success) {
          throw new Error(
            result.message
          );
        }

        setProgress(
          Math.round(
            ((i + 1) /
              files.length) *
              100
          )
        );
      }

      setSuccess(
        `${files.length} file(s) uploaded successfully`
      );

      loadGallery();
    } catch (err) {
      setError(
        err.message ||
          "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function uploadPhotos(e) {
    const files =
      Array.from(e.target.files);

    uploadFiles(files, "image");
  }

  async function uploadVideos(e) {
    const files =
      Array.from(e.target.files);

    uploadFiles(files, "video");
  }

  async function deleteMedia(id) {
    const confirmDelete =
      window.confirm(
        "Delete this media item?"
      );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${API}/api/gallery/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (!data.success) {
        throw new Error(
          data.message
        );
      }

      loadGallery();
    } catch (err) {
      alert(
        err.message ||
          "Delete failed"
      );
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="loading-box">
          <FaSpinner className="spin" />
          <p>
            Loading Gallery...
          </p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="gallery-manager">
        <div className="gallery-header">
          <div>
            <h1>
              Gallery Manager
            </h1>

            <p>
              Manage photos and
              videos.
            </p>
          </div>

          <button
            className="refresh-btn"
            onClick={loadGallery}
          >
            <FaSyncAlt />
            Refresh
          </button>
        </div>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        {success && (
          <div className="success-box">
            {success}
          </div>
        )}

        {uploading && (
          <div className="upload-progress">
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
              }}
            />
            <span>
              {progress}%
            </span>
          </div>
        )}

        <div className="upload-actions">
          <label className="upload-btn">
            <FaImages />
            Upload Photos

            <input
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={
                uploadPhotos
              }
            />
          </label>

          <label className="upload-btn">
            <FaVideo />
            Upload Videos

            <input
              type="file"
              multiple
              accept="video/*"
              hidden
              onChange={
                uploadVideos
              }
            />
          </label>
        </div>

        {/* PHOTOS */}

        <div className="media-section">
          <h2>
            <FaImages />
            Photos (
            {photos.length})
          </h2>

          <div className="media-grid">
            {photos.map(
              (photo) => (
                <div
                  className="media-card"
                  key={photo.id}
                >
                  <img
                    src={photo.url}
                    alt={photo.name}
                  />

                  <div className="media-info">
                    <span>
                      {photo.name}
                    </span>

                    <button
                      onClick={() =>
                        deleteMedia(
                          photo.id
                        )
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* VIDEOS */}

        <div className="media-section">
          <h2>
            <FaVideo />
            Videos (
            {videos.length})
          </h2>

          <div className="media-grid">
            {videos.map(
              (video) => (
                <div
                  className="media-card"
                  key={video.id}
                >
                  <video
                    controls
                    preload="metadata"
                  >
                    <source
                      src={video.url}
                    />
                  </video>

                  <div className="media-info">
                    <span>
                      {video.name}
                    </span>

                    <button
                      onClick={() =>
                        deleteMedia(
                          video.id
                        )
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {!photos.length &&
          !videos.length && (
            <div className="empty-gallery">
              <FaPlus />

              <h3>
                No Media Found
              </h3>

              <p>
                Upload photos or
                videos to start
                building your
                gallery.
              </p>
            </div>
          )}
      </div>
    </AdminLayout>
  );
}