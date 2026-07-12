const express = require("express");
const router = express.Router();

const storeController = require("../controllers/store.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { createStoreValidation } = require("../validations/store.validation");
const validationMiddleware = require("../middlewares/validation.middleware");

router.use(authMiddleware);

router.post("/", createStoreValidation, validationMiddleware, storeController.createStore);

router.get("/", storeController.getAllStores);

router.get("/search", storeController.searchStores);

router.get("/:id", storeController.getStoreById);

module.exports = router;
