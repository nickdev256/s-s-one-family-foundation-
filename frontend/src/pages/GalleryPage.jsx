
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
  "Environment"
];

export default function GalleryPage() {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    loadGallery();
  }, []);

 async function loadGallery() {
  try {
    const response = await fetch(
      `${API_URL}/api/gallery`
    );

    const text =
      await response.text();

    console.log(
      "Gallery Response:",
      text
    );

    const data =
      JSON.parse(text);

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
          item =>
            item.category === activeCategory
        );

  if (loading) {
    return (
      <section className="gallery-loading">
        <div className="loader"></div>
        <h2>Loading Gallery...</h2>
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
            Stories Of Hope In Pictures
          </h1>

          <p>
            Explore moments of transformation,
            community impact and lives being
            changed through S&S One Family
            Foundation.
          </p>

        </div>

      </section>

      {/* FILTERS */}

      <div className="gallery-filter">

        {categories.map((item) => (

          <button
            key={item}
            className={
              activeCategory === item
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

      {gallery.length > 0 && (
  <section className="featured-image">
    {gallery[0].type === "video" ? (
      <video controls>
        <source src={gallery[0].image_url} />
      </video>
    ) : (
      <img
        src={gallery[0].image_url}
        alt={gallery[0].name}
      />
    )}

    <div className="featured-overlay">
      <h2>
        {gallery[0].name ||
          "Building Brighter Futures"}
      </h2>

      <p>
        Every image tells a story of hope,
        resilience and transformation.
      </p>
    </div>
  </section>
)}

      {/* GALLERY */}

      <div className="gallery-grid">
  {filteredGallery.length === 0 ? (
    <div className="gallery-empty">
      <h2>No Media Found</h2>
      <p>
        Upload media from the Gallery
        Manager.
      </p>
    </div>
  ) : (
    filteredGallery.map((item) => (
      <div
        key={item.id}
        className="gallery-card"
      >
        {item.type === "video" ? (
          <video controls>
            <source
              src={item.image_url}
            />
          </video>
        ) : (
          <img
            src={item.image_url}
            alt={item.name}
          />
        )}

        <div className="overlay">
          <h3>{item.name}</h3>

          <span>
            {item.category ||
              "Gallery"}
          </span>
        </div>
      </div>
    ))
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

    </section>
  );
}

