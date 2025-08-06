import { Request, Response } from "express";
import { UserRole } from "@prisma/client";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppErrors";
import { hash } from "bcrypt";

class RefundsController {
  async create(request: Request, response: Response) {
    return response.json({ message: "OK" });
  }
}

export { RefundsController };
