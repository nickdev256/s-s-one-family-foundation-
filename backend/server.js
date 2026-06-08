import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import donationRoutes from "./routes/donationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

dotenv.config();

const app = express();

/* =================================
MIDDLEWARE
================================= */

app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =================================
API ROUTES
================================= */

app.use("/api/donations", donationRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/partners", partnerRoutes);

app.use("/api/volunteers", volunteerRoutes);

app.use("/api/reports", reportRoutes);

app.use("/api/cms", cmsRoutes);

app.use("/api/gallery", galleryRoutes);

/* =================================
HEALTH CHECK
================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    name: "S&S One Family Foundation API",
    version: "1.0.0",
    status: "Running",
    timestamp: new Date().toISOString()
  });
});

/* =================================
API INFO
================================= */

app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    endpoints: {
      donations: "/api/donations",
      dashboard: "/api/dashboard/stats",
      partners: "/api/partners",
      volunteers: "/api/volunteers",
      reports: "/api/reports",
      cms: "/api/cms/:page",
      gallery: "/api/gallery"
    }
  });
});

/* =================================
404 HANDLER
================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

/* =================================
GLOBAL ERROR HANDLER
================================= */

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/* =================================
START SERVER
================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
====================================
🚀 SERVER STARTED
====================================
URL: http://localhost:${PORT}
MODE: ${process.env.NODE_ENV || "development"}
====================================
  `);
});