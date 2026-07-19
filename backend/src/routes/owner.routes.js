const express = require("express");
const router = express.Router();

const ownerController = require("../controllers/owner.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

router.use(authMiddleware);

router.use(roleMiddleware("owner"));

router.get(
    "/dashboard",
    ownerController.dashboard
);

router.get(
    "/ratings",
    ownerController.getRatings
);

module.exports = router;