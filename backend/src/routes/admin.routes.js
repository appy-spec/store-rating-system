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

router.post(
    "/users",
    createUserValidation,
    validationMiddleware,
    adminController.createUser
);

router.get(
    "/users/filter",
    adminController.filterUsers
);

router.get(
    "/users/:id",
    adminController.getUserById
);

router.post(
    "/stores",
    createStoreValidation,
    validationMiddleware,
    adminController.createStore
);

router.get(
    "/stores/filter",
    adminController.filterStores
);

module.exports = router;