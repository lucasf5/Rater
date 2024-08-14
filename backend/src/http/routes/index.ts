import { FastifyInstance } from "fastify";

import { mainController } from "@/http/controllers/main.controller";
import { addMovieController } from "../controllers/addMovie.controller";
import { deleteUserController } from "../controllers/delete.controller";
import { loginController } from "../controllers/login.controller";
import { logoutController } from "../controllers/logout.controller";
import { registerController } from "../controllers/register.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middleware/authenticate";

export const appRoutes = async (app: FastifyInstance) => {
  app.get("/", mainController);
  app.post("/register", registerController);
  app.post("/login", loginController);
  app.post("/logout", { preHandler: [authenticate] }, logoutController);
  app.post("/addMovies", { preHandler: [authenticate] }, addMovieController);
  app.get("/profile", { preHandler: [authenticate] }, userController);
  app.put("/user", { preHandler: [authenticate] }, updateUserController);
  app.delete("/user", { preHandler: [authenticate] }, deleteUserController);
};
