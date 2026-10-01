import User from "../models/user.js";

export const getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      return res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((error) => {
      return res.status(500).send({ message: "Error del servidor", error });
    });
};
