import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { LoginService } from "../login";

export const makeLoginService = () => {
  const usersRepository = new PrismaUsersRepository();
  const loginService = new LoginService(usersRepository);

  return { loginService };
};
