import { Movie, Prisma } from "@prisma/client";

export interface MoviesRepositoryInterface {
  create(data: Prisma.MovieCreateInput): Promise<Movie>;
  findByMovieIdAndUserId(
    movieId: string,
    userId: string
  ): Promise<Movie | null>;
  getAllMoviesByUserId(userId: string): Promise<Movie[]>;
}
