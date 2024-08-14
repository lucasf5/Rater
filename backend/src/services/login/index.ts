import { UsersRepositoryInterface } from "@/repositories/prisma/interfaces/users-repository-interface";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import CustomError from "../@erros/CustomError";

interface LoginServiceRequest {
  email: string;
  password: string;
}

export class LoginService {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute({ email, password }: LoginServiceRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new CustomError("Invalid email or password", 401);
    }

    const passwordMatches = await compare(password, user.password_hash);

    if (!passwordMatches) {
      throw new CustomError("Invalid email or password", 401);
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return { user, token };
  }
}
