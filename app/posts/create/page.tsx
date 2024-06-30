import { Button, Input, Textarea } from "@nextui-org/react";
import { createPost } from "../actions";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const Page = () => {
  return (
    <form action={createPost} className="flex flex-col gap-3 mt-4">
      <Input placeholder="Title" name="title" />
      <Textarea placeholder="Content" name="content" />
      <Button type="submit" color="success">
        Create
      </Button>
    </form>
  );
};

export default Page;
