import { PrismaClient } from "@prisma/client";
import { cache } from "react";

const prisma = new PrismaClient();

export const getPosts = cache(async () => await prisma.post.findMany());
