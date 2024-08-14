import { makeAddMovieService } from "@/services/@factories/make-add-movies-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const addMovieController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const addMovieBodySchema = z.object({
    movieId: z.string(),
  });

  const { movieId } = addMovieBodySchema.parse(req.body);
  const userId = req.user.userId;

  const { addMovieService } = makeAddMovieService();

  await addMovieService.execute({ movieId, userId });

  reply.status(201).send();
};
