import { PropsWithChildren } from "react";
import { Content } from "./Content/Content";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <main>
        <Content>{children}</Content>
      </main>
    </>
  );
}
