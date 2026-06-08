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
  const [loading, setLoading] =
    useState(true);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [photos, setPhotos] =
    useState([]);

  const [videos, setVideos] =
    useState([]);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [caption, setCaption] =
    useState("");

  const [category, setCategory] =
    useState("Community");

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      setLoading(true);
      setError("");

      const response =
        await fetch(
          `${API}/api/gallery`
        );

      const data =
        await response.json();

      if (!data.success) {
        throw new Error(
          data.message
        );
      }

      const gallery =
        data.gallery || [];

      setPhotos(
        gallery.filter(
          (item) =>
            item.type ===
            "image"
        )
      );

      setVideos(
        gallery.filter(
          (item) =>
            item.type ===
            "video"
        )
      );
    } catch (err) {
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

      for (
        let i = 0;
        i < files.length;
        i++
      ) {
        const file =
          files[i];

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

        formData.append(
          "caption",
          caption
        );

        formData.append(
          "category",
          category
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

        if (
          !result.success
        ) {
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

      setCaption("");
      setCategory(
        "Community"
      );

      loadGallery();
    } catch (err) {
      setError(
        err.message ||
          "Upload failed"
      );
    } finally {
      setUploading(false);
    }
  }

  function uploadPhotos(e) {
    const files =
      Array.from(
        e.target.files
      );

    uploadFiles(
      files,
      "image"
    );
  }

  function uploadVideos(e) {
    const files =
      Array.from(
        e.target.files
      );

    uploadFiles(
      files,
      "video"
    );
  }

  async function deleteMedia(
    id
  ) {
    const confirmed =
      window.confirm(
        "Delete this media?"
      );

    if (!confirmed) return;

    try {
      const response =
        await fetch(
          `${API}/api/gallery/${id}`,
          {
            method:
              "DELETE",
          }
        );

      const data =
        await response.json();

      if (
        !data.success
      ) {
        throw new Error(
          data.message
        );
      }

      loadGallery();
    } catch (err) {
      alert(
        err.message
      );
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="loading-box">
          <FaSpinner className="spin" />
          <p>
            Loading
            Gallery...
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
              Gallery
              Manager
            </h1>

            <p>
              Manage
              photos
              and
              videos.
            </p>
          </div>

          <button
            className="refresh-btn"
            onClick={
              loadGallery
            }
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

        <div className="gallery-form">

          <div className="form-group">
            <label>
              Description
            </label>

            <textarea
              value={
                caption
              }
              onChange={(
                e
              ) =>
                setCaption(
                  e
                    .target
                    .value
                )
              }
              placeholder="Enter description..."
            />
          </div>

          <div className="form-group">
            <label>
              Category
            </label>

            <select
              value={
                category
              }
              onChange={(
                e
              ) =>
                setCategory(
                  e
                    .target
                    .value
                )
              }
            >
              <option>
                Education
              </option>

              <option>
                Health
              </option>

              <option>
                Youth
              </option>

              <option>
                Women
              </option>

              <option>
                Community
              </option>

              <option>
                Environment
              </option>
            </select>
          </div>

        </div>

        <div className="upload-actions">

          <label className="upload-btn">
            <FaImages />
            Upload
            Photos

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
            Upload
            Videos

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

        <div className="media-section">
          <h2>
            <FaImages />
            Photos (
            {
              photos.length
            }
            )
          </h2>

          <div className="media-grid">
            {photos.map(
              (
                photo
              ) => (
                <div
                  key={
                    photo.id
                  }
                  className="media-card"
                >
                  <img
                    src={
                      photo.image_url ||
                      photo.url
                    }
                    alt={
                      photo.name
                    }
                  />

                  <div className="media-info">
                    <h4>
                      {
                        photo.name
                      }
                    </h4>

                    <p>
                      {
                        photo.caption
                      }
                    </p>

                    <small>
                      {
                        photo.category
                      }
                    </small>

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

        <div className="media-section">
          <h2>
            <FaVideo />
            Videos (
            {
              videos.length
            }
            )
          </h2>

          <div className="media-grid">
            {videos.map(
              (
                video
              ) => (
                <div
                  key={
                    video.id
                  }
                  className="media-card"
                >
                  <video
                    controls
                  >
                    <source
                      src={
                        video.image_url ||
                        video.url
                      }
                    />
                  </video>

                  <div className="media-info">
                    <h4>
                      {
                        video.name
                      }
                    </h4>

                    <p>
                      {
                        video.caption
                      }
                    </p>

                    <small>
                      {
                        video.category
                      }
                    </small>

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
                No Media
                Found
              </h3>

              <p>
                Upload
                photos or
                videos to
                start
                building
                your
                gallery.
              </p>
            </div>
          )}
      </div>
    </AdminLayout>
  );
}