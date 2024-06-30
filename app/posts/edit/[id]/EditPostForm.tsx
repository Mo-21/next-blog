"use client";

import "easymde/dist/easymde.min.css";
import {
  PostSchemaType,
  postValidationSchema,
} from "@/app/lib/schemas/postsValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Spinner } from "@nextui-org/react";
import { Post } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPostForm = ({ post, id }: { post: Post; id: string }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postValidationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { push } = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      await fetch(`/api/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      push("/posts");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-4">
      <Input
        placeholder="Title"
        {...register("title")}
        defaultValue={post.title}
      />
      {errors && errors.title && (
        <p className="text-red-500">{errors.title.message}</p>
      )}

      <Controller
        name="content"
        defaultValue={post.content}
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
      />
      {errors && errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}

      <Button color="success" type="submit">
        {isLoading ? <Spinner /> : "Update"}
      </Button>
    </form>
  );
};

export default EditPostForm;
