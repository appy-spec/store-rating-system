const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");
const storeRoutes = require("./store.routes");
const ratingRoutes = require("./rating.routes");
const ownerRoutes = require("./owner.routes");
const userRoutes = require("./user.routes");

router.get("/", (req, res) => {

  res.status(200).json({
    
    success: true,
    message: "Store Rating System API",
  });
});

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/stores", storeRoutes);
router.use("/ratings", ratingRoutes);
router.use("/owner", ownerRoutes);
router.use("/users", userRoutes);

module.exports = router;
