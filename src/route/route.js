import express from 'express';
import UserController from '../controller/UserController.js';
import ProductController from '../controller/ProductController.js';

const route = express.Router();

route.get("/products", ProductController.getAll);
route.post("/users/register", UserController.create);


export default route;