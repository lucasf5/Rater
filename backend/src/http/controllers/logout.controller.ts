import { FastifyReply, FastifyRequest } from "fastify";

export const logoutController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  if (!req.user?.userId) {
    return reply.status(401).send({ error: "User not authenticated" });
  }

  reply
    .clearCookie("token", {
      path: "/",
    })
    .status(200)
    .send({ message: "Logout successful" });
};
