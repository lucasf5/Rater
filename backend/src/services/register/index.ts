import { UsersRepositoryInterface } from "@/repositories/prisma/interfaces/users-repository-interface";
import { hash } from "bcryptjs";
import CustomError from "../@erros/CustomError";

interface RegisterServiceRequest {
  email: string;
  password: string;
}

export class RegisterService {
  constructor(private usersRepository: UsersRepositoryInterface) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }: RegisterServiceRequest) {
    const password_hash = await hash(password, 8);

    const existingSameEmail = await this.usersRepository.findByEmail(email);

    if (existingSameEmail) {
      throw new CustomError("Email already in use", 409);
    }

    const user = await this.usersRepository.create({
      email,
      password_hash,
    });

    return user;
  }
}
