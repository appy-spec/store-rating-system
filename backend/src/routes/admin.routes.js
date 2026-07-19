const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

const {
    createUserValidation,
    createStoreValidation
} = require("../validations/admin.validation");

router.use(authMiddleware);

router.use(roleMiddleware("admin"));

router.get(
    "/dashboard",
    adminController.dashboard
);

router.get("/users", adminController.getUsers);

router.get(
    "/users/filter",
    adminController.filterUsers
);

router.get(
    "/users/:id",
    adminController.getUserById
);

router.post(
    "/users",
    createUserValidation,
    validationMiddleware,
    adminController.createUser
);

router.get("/stores", adminController.getStores);

router.get(
    "/stores/filter",
    adminController.filterStores
);

router.get(
    "/stores/:id",
    adminController.getStoreById
);

router.post(
    "/stores",
    createStoreValidation,
    validationMiddleware,
    adminController.createStore
);

module.exports = router;