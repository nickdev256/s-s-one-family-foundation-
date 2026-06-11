import express from "express";

import {
createPesapalOrder
} from "../controllers/pesapalController.js";

import {
registerIpn
} from "../controllers/registerIpnController.js";

const router = express.Router();

/* Create Payment Order */

router.post(
"/create-order",
createPesapalOrder
);

/* Register IPN */

router.get(
"/register-ipn",
registerIpn
);

export default router;
