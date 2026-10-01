import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/volt")
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((error) => {
      console.error("Error al conectar a MongoDB:", error);
    });
};

export default connectDatabase;
