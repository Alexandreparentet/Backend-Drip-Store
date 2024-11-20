import express from "express";
import route from "./src/route/route.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", route);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
