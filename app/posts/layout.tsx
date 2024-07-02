import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
const dynamicImport = dynamic;
export { dynamicImport };

const Layout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default Layout;
