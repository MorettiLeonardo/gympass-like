import express, { type Request, type Response } from "express"
import {z} from "zod"
import { prisma } from "./lib/prisma"

export const app = express()

app.use(express.json())

app.post("/members", async (req: Request, res: Response) => {
  const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6)
  })

  console.log(req.body)

  const { name, email, password } = registerSchema.parse(req.body)

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password
    }
  })

  res.send(201)
})
