import express from "express";

import {
createDonation,
capturePayPalOrder,
getDonations
}
from "../controllers/donationController.js";

const router = express.Router();


router.post(
"/",
createDonation
);




router.post(
"/capture",
capturePayPalOrder
);



GET /api/donations/all

router.get(
"/all",
getDonations
);

export default router;
