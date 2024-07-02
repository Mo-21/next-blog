import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prismaClient";
import fs from "fs";
import { pipeline, Readable } from "stream";
import { promisify } from "util";

const pump = promisify(pipeline);

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("img") as File;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const filePath = `public/uploads/${file.name}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  await pump(stream, fs.createWriteStream(filePath));

  await prisma.post.create({
    data: {
      title,
      content,
      img: file ? `uploads/${file.name}` : null,
      authorId: 1,
    },
  });

  return NextResponse.json(formData);
}
