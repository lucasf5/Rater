import { makeRegisterService } from "@/services/@factories/make-register-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const registerController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const registerBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const { email, password } = registerBodySchema.parse(req.body);

  const { registerService } = makeRegisterService();

  await registerService.execute({ email, password });

  reply.status(201).send();
};
