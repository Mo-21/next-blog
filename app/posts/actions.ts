"use server";

import { PrismaClient } from "@prisma/client";
import { postValidationSchema } from "../lib/schemas/postsValidationSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const createPost = async (formData: FormData) => {
  const { title, content, img } = postValidationSchema.parse({
    title: formData.get("title"),
    content: formData.get("content"),
    img: formData.get("img") || "",
  });

  await prisma.post.create({
    data: {
      title,
      content,
      img,
      authorId: 1,
    },
  });

  revalidatePath("/posts");
  redirect("/posts");
};
