import { fastifyCookie } from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";
import { fastifySwagger } from "@fastify/swagger";
import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { appRoutes } from "./http/routes";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

export const app = fastify();

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: "API de Filmes",
      description: "API para gerenciar usuários e filmes",
      version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "API de Filmes",
      description: "Documentação da API de Filmes",
      version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
  },
  exposeRoute: true,
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(fastifyCookie);
app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Validation failed",
      issues: error.format(),
    });
  }

  if (env.NODE_ENV !== "prod") {
    console.error(error);
  }

  throw error;
});
