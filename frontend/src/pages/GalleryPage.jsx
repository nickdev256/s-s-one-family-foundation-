import "./GalleryPage.css";
import { useEffect, useState } from "react";
import Footer from "../Sections/Footer";
import { motion } from "framer-motion";

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

<>

<section
  id="gallery"
  className="gallery-page"
>

      {/* HERO */}

     <motion.section
className="gallery-hero"

initial={{
opacity:0,
y:-80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}
>

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

      </motion.section>

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


      {/* GALLERY GRID */}

     <motion.div
className="gallery-grid"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}
>

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

          filteredGallery.map((item) => (
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

      </motion.div>

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

        <motion.div
          className="media-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMedia(null)}
        >

          <div
            className="media-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>

            {selectedMedia.type === "video" ? (

              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source
                  src={
                    selectedMedia.image_url ||
                    selectedMedia.url
                  }
                />
                Your browser does not support videos.
              </video>

            ) : (

              <img
                src={
                  selectedMedia.image_url ||
                  selectedMedia.url
                }
                alt={
                  selectedMedia.caption ||
                  "Gallery Image"
                }
              />

            )}

            <motion.div
              className="media-details"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .45 }}
            >

              <div className="category-badge">
                {selectedMedia.category || "Gallery"}
              </div>

              <h2>
                {selectedMedia.caption || "Gallery Media"}
              </h2>

              <p>
                Uploaded on{" "}
                {selectedMedia.created_at
                  ? new Date(
                      selectedMedia.created_at
                    ).toLocaleDateString()
                  : "Recently"}
              </p>

            </motion.div>

          </div>

        </motion.div>

      )}

    </section>

    <Footer />

  </>

);

}