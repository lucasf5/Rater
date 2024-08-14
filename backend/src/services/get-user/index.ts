import { UsersRepositoryInterface } from "@/repositories/prisma/interfaces/users-repository-interface";
import CustomError from "../@erros/CustomError";

export class GetUserService {
  constructor(private usersRepository: UsersRepositoryInterface) {
    this.usersRepository = usersRepository;
  }

  async execute(userId: string) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    return user;
  }
}
