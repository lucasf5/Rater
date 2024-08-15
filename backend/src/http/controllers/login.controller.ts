import { makeLoginService } from "@/services/@factories/make-login-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const loginController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const { email, password } = loginBodySchema.parse(req.body);

  const { loginService } = makeLoginService();

  const { user, token } = await loginService.execute({ email, password });

  reply.setCookie("token", token, {
    httpOnly: true,
    secure: false, // Deve ser false em localhost
    sameSite: "lax", // Use lax ou none
    path: "/",
    maxAge: 3600,
  });

  reply.status(200).send({ user });
};
