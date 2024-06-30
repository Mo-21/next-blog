"use client";

import "easymde/dist/easymde.min.css";
import {
  PostSchemaType,
  postValidationSchema,
} from "@/app/lib/schemas/postsValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { useRouter } from "next/navigation";

const NewPostFields = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postValidationSchema),
  });

  const { push } = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(data),
    });

    push("/posts");
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-4">
      <Input placeholder="Title" {...register("title")} />
      {errors && errors.title && (
        <p className="text-red-500">{errors.title.message}</p>
      )}

      <Controller
        name="content"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
      />
      {errors && errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}

      <Button color="success" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewPostFields;
