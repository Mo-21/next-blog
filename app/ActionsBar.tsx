import { Button } from "@nextui-org/react";

const ActionsBar = () => {
  return (
    <div className="flex justify-between ">
      <Button className="text-md text-white" color="success" radius="none">
        Create new
      </Button>
      <Button className="text-md text-white" color="success" radius="none">
        Create new
      </Button>
    </div>
  );
};

export default ActionsBar;
