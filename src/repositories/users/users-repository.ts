import { prisma } from "@/lib/prisma"

import type { CreateUserRepositoryParams, UserWithSameEmailParams } from "@/types/repositories/user-repository"
import type { User } from "../../../prisma/generated/client"
import type { IUsersRepository } from "./users-repository-contract"

export class UsersRepository implements IUsersRepository {
  async create(params: CreateUserRepositoryParams): Promise<User> {
    const { name, email, password_hash} = params

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash
      }
    })

    return user
  }

  async findByEmail(params: UserWithSameEmailParams): Promise<User | null> {
    const { email } = params

    const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

    return user
  }
}
