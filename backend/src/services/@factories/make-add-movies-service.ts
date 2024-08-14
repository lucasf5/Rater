import { PrismaMoviesRepository } from "@/repositories/prisma/prisma-movies-repository";
import { AddMovieService } from "../add-movies";

export const makeAddMovieService = () => {
  const moviesRepository = new PrismaMoviesRepository();
  const addMovieService = new AddMovieService(moviesRepository);

  return { addMovieService };
};
