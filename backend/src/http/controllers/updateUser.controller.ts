import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export const updateUserController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const { username, fullname } = req.body as {
    username: string;
    fullname: string;
  };

  if (!req.user?.userId) {
    return reply.status(401).send({ error: "User not authenticated" });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        username,
        fullname,
      },
    });

    return reply.status(200).send(updatedUser);
  } catch (error) {
    return reply.status(500).send({ error: "Failed to update user" });
  }
};
