import { prisma } from "@/lib/prisma"

import type { CreateUserRepositoryParams, UserWithSameEmailParams } from "@/types/repositories/user-repository"

export class UserRepository {
  async create(params: CreateUserRepositoryParams) {
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

  async userWithSameEmail(params: UserWithSameEmailParams) {
    const { email } = params

    const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

    return user
  }
}
