import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const ActionsBar = () => {
  return (
    <div className="flex justify-between ">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[20rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        type="search"
      />
      <Link href="/posts/create">
        <Button className="text-md" color="success" radius="sm">
          Create new
        </Button>
      </Link>
    </div>
  );
};

export default ActionsBar;
