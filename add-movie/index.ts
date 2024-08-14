import { MoviesRepositoryInterface } from "@/repositories/prisma/interfaces/movies-repository-interface";
import CustomError from "../@errors/CustomError";

interface AddMovieServiceRequest {
  movieId: string;
  userId: number;
}

export class AddMovieService {
  constructor(private moviesRepository: MoviesRepositoryInterface) {
    this.moviesRepository = moviesRepository;
  }

  async execute({ movieId, userId }: AddMovieServiceRequest) {
    const existingMovie = await this.moviesRepository.findByMovieIdAndUserId(
      movieId,
      userId
    );

    if (existingMovie) {
      throw new CustomError("Movie already added", 409);
    }

    await this.moviesRepository.create({
      movieId,
      user: {
        connect: { id: userId },
      },
    });
  }
}
