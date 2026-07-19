const authService = require("../services/auth.service");
const { successResponse } = require("../utils/response");

const signup = async (req, res, next) => {
    try {
        await authService.registerUser(req.body);

        return successResponse(
            res,
            "User registered successfully.",
            {},
            201
        );
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const result = await authService.loginUser(
            email,
            password
        );

        res.cookie("token", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return successResponse(
            res,
            "Login successful.",
            result.user
        );

    } catch (error) {
        next(error);
    }
};

const profile = async (req, res, next) => {
    try {

        const user = await authService.getProfile(
            req.user.id
        );

        return successResponse(
            res,
            "Profile fetched successfully.",
            user
        );

    } catch (error) {
        next(error);
    }
};

const changePassword = async (req, res, next) => {
    try {

        const {
            currentPassword,
            newPassword
        } = req.body;

        await authService.changePassword(
            req.user.id,
            currentPassword,
            newPassword
        );

        return successResponse(
            res,
            "Password changed successfully."
        );

    } catch (error) {
        next(error);
    }
};

const logout = async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    return successResponse(
        res,
        "Logout successful."
    );
};

module.exports = {
    signup,
    login,
    profile,
    changePassword,
    logout
};
