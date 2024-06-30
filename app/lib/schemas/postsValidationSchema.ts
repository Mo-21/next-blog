import { z } from "zod";

export const postValidationSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  content: z.string().min(1, "Content is required"),
  img: z.string().optional(),
});

export type PostSchemaType = z.infer<typeof postValidationSchema>;
