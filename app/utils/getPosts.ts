import prisma from "@/prisma/prismaClient";
import { Post, User } from "@prisma/client";

export interface PostWithUser extends Post {
  User: User;
}

export const getPosts = async (
  page: number,
  pageSize: number
): Promise<PostWithUser[]> =>
  await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: {
      User: true,
    },
  });
