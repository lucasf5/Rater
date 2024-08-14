import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserService } from "../get-user";

export const makeUsersService = () => {
  const usersRepository = new PrismaUsersRepository();
  const userService = new GetUserService(usersRepository);

  return { userService };
};
