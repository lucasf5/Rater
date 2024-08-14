import { prisma } from "@/lib/prisma";
import { Movie, Prisma } from "@prisma/client";
import { MoviesRepositoryInterface } from "./interfaces/movies-repository-interface";

export class PrismaMoviesRepository implements MoviesRepositoryInterface {
  async create(data: Prisma.MovieCreateInput) {
    const movie = await prisma.movie.create({
      data,
    });

    return movie;
  }

  async findByMovieIdAndUserId(
    movieId: string,
    userId: string
  ): Promise<Movie | null> {
    const movie = await prisma.movie.findFirst({
      where: {
        movieId,
        userId,
      },
    });

    return movie;
  }

  async getAllMoviesByUserId(userId: string): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      where: {
        userId,
      },
    });

    return movies;
  }
}
