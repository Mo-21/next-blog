import { PropsWithChildren } from "react";

export const experimental_ppr = true;

const Layout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default Layout;
