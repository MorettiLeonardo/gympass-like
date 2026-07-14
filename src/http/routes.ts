import { Router } from "express"

import { registerController } from "./controllers/register"

export const routes = Router()

routes.post("/members", registerController)
