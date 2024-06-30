import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">{children}</div>
  );
};

export default Container;
