import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();

  await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: 1,
    },
  });

  revalidatePath("/posts");

  return NextResponse.json(body);
}
