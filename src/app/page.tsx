import React from "react";
import HomeLayout from "@/components/HomeLayout";
import HomeNavbar from "@/components/HomeNavbar";
import HomeMainContent from "@/components/HomeMainContent";
import HomeCodeGlow from "@/components/HomeCodeGlow";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <HomeLayout
      navbar={<HomeNavbar />}
      main={<HomeMainContent />}
      codeBlocks={<HomeCodeGlow />}
      footer={<HomeFooter />}
    />
  );
}
