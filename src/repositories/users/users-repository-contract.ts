import type { User } from "../../../prisma/generated/client"

import type { CreateUserRepositoryParams, UserWithSameEmailParams } from "@/types/repositories/user-repository"

export interface IUsersRepository {
  create(params: CreateUserRepositoryParams): Promise<User>
  findByEmail(params: UserWithSameEmailParams): Promise<User | null>
}
