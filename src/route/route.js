import express from 'express';
import UserController from '../controller/UserController.js';
import ProductController from '../controller/ProductController.js';
import LoginController from '../controller/LoginController.js';

const route = express.Router();

route.get("/product/all", ProductController.getAll);
route.post("/user/register", UserController.create);
route.get("/user/all", UserController.getAll);
route.post("/api/user/login", LoginController.login);
route.post("/user/login", UserController.getUnique);


export default route;