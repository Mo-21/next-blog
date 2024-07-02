"use client";

import "easymde/dist/easymde.min.css";
import {
  PostSchemaType,
  postValidationSchema,
} from "@/app/lib/schemas/postsValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spinner, Input } from "@nextui-org/react";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

interface PostsFormProps {
  post?: Post;
  id?: string;
}

const PostsForm = ({ post, id }: PostsFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postValidationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const { push, refresh } = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);

    if (ref.current && ref.current.files) {
      const file = ref.current.files;
      formData.append("img", file[0]);
    }
    try {
      if (post) {
        await fetch(`/api/posts/${id}`, {
          method: "PATCH",
          body: formData,
        });
      } else {
        await fetch("/api/posts", {
          method: "POST",
          body: formData,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      push("/posts");
      refresh();
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-4">
      <Input
        placeholder="Title"
        {...register("title")}
        defaultValue={post?.title || ""}
      />
      {errors && errors.title && (
        <p className="text-red-500">{errors.title.message}</p>
      )}

      <div className="flex justify-between">
        <label htmlFor="img">Image</label>
        <input type="file" name="img" ref={ref} />
      </div>

      <Controller
        name="content"
        defaultValue={post?.content || ""}
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
      />
      {errors && errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}

      <Button disabled={isLoading} color="success" type="submit">
        {isLoading ? <Spinner color="white" /> : post ? "Update" : "Create"}
      </Button>
    </form>
  );
};

export default PostsForm;
