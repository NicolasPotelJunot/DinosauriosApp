import React from "react";
import { SectionFirst } from "./ui/quien soy/SectionFirst";
import { SectionSecond } from "./ui/quien soy/SectionSecond";

export const QuienSoyScreen = () => {
  return (
    <main className="h-screen overflow-y-scroll w-full">
      <SectionFirst />
      <SectionSecond />
    </main>
  );
};
