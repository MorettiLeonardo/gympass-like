import type { Request, Response } from "express"
import z from "zod"

import { registerService } from "@/services/register"

export async function registerController(req: Request, res: Response){
  const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerSchema.parse(req.body)

  try {
    await registerService({ name, email, password})
    res.status(200).send("User created")
  } catch (error) {
    return res.status(400).send(error)
  }

  res.status(201).send()
}
