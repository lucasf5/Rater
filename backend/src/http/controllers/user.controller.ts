import { makeUsersService } from "@/services/@factories/make-users-service";
import { FastifyReply, FastifyRequest } from "fastify";

export const userController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const userId = req.user?.userId;

  if (!userId) {
    return reply.status(400).send({ message: "User ID not found" });
  }

  const { userService } = makeUsersService();
  const user = await userService.execute(userId);

  reply.send(user);
};
