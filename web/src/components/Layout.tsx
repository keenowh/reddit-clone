import { Navbar } from "./Navbar";
import React from "react";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({
  variant = "regular",
  children,
}) => {
  return (
    <>
      <Navbar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
