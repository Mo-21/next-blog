import { Button, Input } from "@nextui-org/react";

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
      <Button className="text-md text-white" color="success" radius="none">
        Create new
      </Button>
    </div>
  );
};

export default ActionsBar;
