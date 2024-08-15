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
    fullname: z.string().min(3),
  });

  const { email, password, fullname } = registerBodySchema.parse(req.body);

  const { registerService } = makeRegisterService();

  await registerService.execute({ email, password, fullname });

  reply.status(201).send();
};
