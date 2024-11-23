import NavBar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default RootLayout;
