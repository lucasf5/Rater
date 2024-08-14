import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export const deleteUserController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  if (!req.user?.userId) {
    return reply.status(401).send({ error: "User not authenticated" });
  }

  try {
    await prisma.user.delete({
      where: { id: req.user.userId },
    });

    reply
      .clearCookie("token", {
        path: "/",
      })
      .status(200)
      .send({ message: "Account deleted successfully" });
  } catch (error) {
    return reply.status(500).send({ error: "Failed to delete account" });
  }
};
