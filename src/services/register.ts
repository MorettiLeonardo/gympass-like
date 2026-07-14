import { hash } from "bcrypt"

import type { IRegisterUserServiceParams } from "@/types/services/register"
import type { IUsersRepository } from "@/repositories/users/users-repository-contract"

export class RegisterService {
  constructor(private readonly usersRepository: IUsersRepository) { }

  async execute(params: IRegisterUserServiceParams) {
    const { name, email, password } = params

    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail({email})

    if (userWithSameEmail) {
      throw new Error("Email already exists")
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash
    })
  }
}
