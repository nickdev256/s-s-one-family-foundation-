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

app.use(
cors({
origin: "*",
credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/donations", donationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/cms", cmsRoutes);
app.use("/api/gallery", galleryRoutes);

app.get("/", (req, res) => {
res.status(200).json({
success: true,
name: "S&S One Family Foundation API",
status: "Running",
});
});

app.get("/api", (req, res) => {
res.status(200).json({
success: true,
endpoints: {
donations: "/api/donations",
dashboard: "/api/dashboard",
partners: "/api/partners",
volunteers: "/api/volunteers",
reports: "/api/reports",
cms: "/api/cms",
gallery: "/api/gallery",
},
});
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
});
