import { UsersRepository } from "@/repositories/users/users-repository"
import { RegisterService } from "@/services/register"
import { registerSchema } from "@/types/schemas/register"

import type { Request, Response } from "express"

export async function registerController(req: Request, res: Response){
  const { name, email, password } = registerSchema.parse(req.body)

  try {
    const usersRepository = new UsersRepository()
    const registerService = new RegisterService(usersRepository)

    await registerService.execute({ name, email, password})
    res.status(200).send("User created")
  } catch (error) {
    return res.status(400).send(error)
  }

  res.status(201).send()
}
