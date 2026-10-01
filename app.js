import express from "express";
import { errors as celebrateErrors } from "celebrate";
import connectDatabase from "./utils/db.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/error-handler.js";
import requestLogger from "./middlewares/request-logger.js";
import errorLogger from "./middlewares/error-logger.js";

const app = express();
const PORT = 3000;

connectDatabase();

app.use(express.json());

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Volt API is running");
});

app.use(routes);

app.use(errorLogger);

app.use(celebrateErrors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
