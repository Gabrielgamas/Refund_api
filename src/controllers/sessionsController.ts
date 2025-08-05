import { Request, Response } from "express";
import { UserRole } from "@prisma/client";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppErrors";
import { hash } from "bcrypt";

class SessionsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.string().email({ message: "Email inválido" }),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    return response.json({ email, password });
  }
}

export { SessionsController };
