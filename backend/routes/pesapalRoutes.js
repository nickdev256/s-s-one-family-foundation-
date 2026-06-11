import express from "express";
import {
createPesapalOrder
} from "../controllers/pesapalController.js";

const router = express.Router();

router.post(
"/create-order",
createPesapalOrder
);

export default router;
