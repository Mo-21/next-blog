import prisma from "@/prisma/prismaClient";
import { Post, User } from "@prisma/client";

export interface PostWithUser extends Post {
  User: User;
}

export const getPosts = async (
  page: number,
  pageSize: number,
  userId: number | undefined
): Promise<PostWithUser[]> =>
  await prisma.post.findMany({
    where: {
      User: {
        id: userId || undefined,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: {
      User: true,
    },
  });
