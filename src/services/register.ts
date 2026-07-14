import { hash } from "bcrypt"

import { UserRepository } from "@/repositories/users-repository"

import type { RegisterUserServiceParams } from "@/types/services/register"

export async function registerService(params: RegisterUserServiceParams) {
    const { name, email, password } = params

    const password_hash = await hash(password, 6)

    const userRepository = new UserRepository()

    const userWithSameEmail = await userRepository.userWithSameEmail({email})

    if (userWithSameEmail) {
      throw new Error("Email already exists")
    }

    await userRepository.create({
      name,
      email,
      password_hash
    })
}
