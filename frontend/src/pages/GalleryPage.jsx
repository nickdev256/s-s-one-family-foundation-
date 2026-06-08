import "./GalleryPage.css";
import { useEffect, useState } from "react";

const API_URL =
  "https://s-s-one-family-foundation.onrender.com";

const categories = [
  "All",
  "Education",
  "Health",
  "Youth",
  "Women",
  "Community",
  "Environment",
];

export default function GalleryPage() {

  const [gallery, setGallery] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedMedia, setSelectedMedia] =
    useState(null);

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {

      const response =
        await fetch(
          `${API_URL}/api/gallery`
        );

      const data =
        await response.json();

      if (data.success) {
        setGallery(
          data.gallery || []
        );
      }

    } catch (error) {

      console.error(
        "Failed to load gallery:",
        error
      );

    } finally {

      setLoading(false);

    }
  }

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) =>
            item.category ===
            activeCategory
        );

  if (loading) {
    return (
      <section className="gallery-loading">
        <div className="loader"></div>
        <h2>
          Loading Gallery...
        </h2>
      </section>
    );
  }

  return (
    <section className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">

        <div className="hero-content">

          <span>
            OUR GALLERY
          </span>

          <h1>
            Stories Of Hope In
            Pictures
          </h1>

          <p>
            Explore moments of
            transformation,
            community impact and
            lives being changed
            through S&S One Family
            Foundation.
          </p>

        </div>

      </section>

      {/* FILTERS */}

      <div className="gallery-filter">

        {categories.map(
          (category) => (
            <button
              key={category}
              className={
                activeCategory ===
                category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(
                  category
                )
              }
            >
              {category}
            </button>
          )
        )}

      </div>

      {/* FEATURED */}

      {gallery.length > 0 && (

        <section className="featured-image">

          {gallery[0].type ===
          "video" ? (

            <video
              controls
              poster={
                gallery[0].image_url
              }
            >
              <source
                src={
                  gallery[0]
                    .image_url ||
                  gallery[0].url
                }
              />
            </video>

          ) : (

            <img
              src={
                gallery[0]
                  .image_url ||
                gallery[0].url
              }
              alt={
                gallery[0].caption
              }
            />

          )}

          <div className="featured-overlay">

            <div className="category-badge">
              {gallery[0]
                .category ||
                "Community"}
            </div>

            <h2>
              {gallery[0]
                .caption ||
                "Building Brighter Futures"}
            </h2>

          </div>

        </section>

      )}

      {/* GALLERY GRID */}

      <div className="gallery-grid">

        {filteredGallery.length ===
        0 ? (

          <div className="gallery-empty">

            <h2>
              No Media Found
            </h2>

            <p>
              Upload media from
              the Gallery Manager.
            </p>

          </div>

        ) : (

          filteredGallery.map(
            (item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() =>
                  setSelectedMedia(
                    item
                  )
                }
              >

                {item.type ===
                "video" ? (

                  <video>
                    <source
                      src={
                        item.image_url ||
                        item.url
                      }
                    />
                  </video>

                ) : (

                  <img
                    src={
                      item.image_url ||
                      item.url
                    }
                    alt={
                      item.caption
                    }
                  />

                )}

                <div className="overlay">

                  <div className="category-badge">
                    {item.category ||
                      "Gallery"}
                  </div>

                  <h3>
                    {item.caption ||
                      "S&S One Family Foundation"}
                  </h3>

                </div>

              </div>
            )
          )

        )}

      </div>

      {/* IMPACT */}

      <section className="gallery-impact">

        <div>
          <h2>
            {gallery.length}+
          </h2>
          <p>
            Gallery Uploads
          </p>
        </div>

        <div>
          <h2>
            10K+
          </h2>
          <p>
            Lives Impacted
          </p>
        </div>

        <div>
          <h2>
            100+
          </h2>
          <p>
            Volunteers
          </p>
        </div>

        <div>
          <h2>
            25+
          </h2>
          <p>
            Partners
          </p>
        </div>

      </section>

      {/* MEDIA VIEWER */}

      {selectedMedia && (

        <div
          className="media-modal"
          onClick={() =>
            setSelectedMedia(
              null
            )
          }
        >

          <div
            className="media-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={() =>
                setSelectedMedia(
                  null
                )
              }
            >
              ✕
            </button>

            {selectedMedia.type ===
            "video" ? (

              <video
                controls
                autoPlay
              >
                <source
                  src={
                    selectedMedia.image_url ||
                    selectedMedia.url
                  }
                />
              </video>

            ) : (

              <img
                src={
                  selectedMedia.image_url ||
                  selectedMedia.url
                }
                alt={
                  selectedMedia.caption
                }
              />

            )}

            <div className="media-details">

              <div className="category-badge">
                {
                  selectedMedia.category
                }
              </div>

              <h2>
                {selectedMedia.caption ||
                  "Gallery Media"}
              </h2>

              <p>
                Uploaded on{" "}
                {selectedMedia.created_at
                  ? new Date(
                      selectedMedia.created_at
                    ).toLocaleDateString()
                  : "Recently"}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}