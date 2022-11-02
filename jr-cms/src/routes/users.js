const { Router } = require("express");
const { register, login } = require("../controllers/users");

const userRouter = Router();

userRouter.post("", register);

userRouter.post("/login", login);

module.exports = userRouter;
