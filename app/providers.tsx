"use client";

import { NextUIProvider } from "@nextui-org/react";
import Container from "./ui/Container";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Container>{children}</Container>
    </NextUIProvider>
  );
}
