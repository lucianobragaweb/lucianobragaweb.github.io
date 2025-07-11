import React from "react";
import MainContent from "@/components/MainContent";
import CodeGlow from "@/components/CodeGlow";

export default function Home() {
  return (
    <>
      <div className="flex-1 z-10">
        <MainContent />
      </div>
      <div className="hidden md:flex flex-col gap-6 absolute right-0 top-0 h-full justify-center pr-8 z-0 pointer-events-none">
        <CodeGlow />
      </div>
    </>
  );
}
