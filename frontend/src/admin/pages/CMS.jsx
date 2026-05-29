import "./CMSPage.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import AdminLayout from "../layout/AdminLayout";

import {
  FaSave,
  FaSpinner
} from "react-icons/fa";

export default function CMSPage() {

  const { page } = useParams();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    section: "main",
    title: "",
    content: "",
    image_url: ""
  });

  useEffect(() => {
    loadContent();
  }, [page]);

  async function loadContent() {
    try {

      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/cms/${page}`
      );

      const data = await response.json();

      if (
        data.success &&
        data.content.length
      ) {
        setForm({
          section:
            data.content[0].section || "main",

          title:
            data.content[0].title || "",

          content:
            data.content[0].content || "",

          image_url:
            data.content[0].image_url || ""
        });
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  async function saveContent() {

    try {

      const response = await fetch(
        `http://localhost:5000/api/cms/${page}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Content Saved Successfully");
      }

    } catch (error) {

      console.error(error);

      alert("Failed to save content");

    }
  }

  if (loading) {
    return (
      <AdminLayout>

        <div className="cms-loading">

          <FaSpinner className="spin" />

          <h2>
            Loading Content...
          </h2>

        </div>

      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="cms-editor">

        <div className="cms-editor-header">

          <span>
            CMS EDITOR
          </span>

          <h1>
            {page.toUpperCase()}
          </h1>

          <p>
            Edit website content
            and publish instantly.
          </p>

        </div>

        <div className="cms-form">

          <label>
            Title
          </label>

          <input
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value
              })
            }
          />

          <label>
            Content
          </label>

          <textarea
            rows="10"
            value={form.content}
            onChange={(e) =>
              setForm({
                ...form,
                content:
                  e.target.value
              })
            }
          />

          <label>
            Image URL
          </label>

          <input
            value={form.image_url}
            onChange={(e) =>
              setForm({
                ...form,
                image_url:
                  e.target.value
              })
            }
          />

          <button
            className="save-btn"
            onClick={saveContent}
          >
            <FaSave />
            Save Changes
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}