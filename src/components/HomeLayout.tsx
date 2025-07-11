import React from "react";

export default function HomeLayout({
  navbar,
  main,
  codeBlocks,
  footer,
}: {
  navbar: React.ReactNode;
  main: React.ReactNode;
  codeBlocks: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#181B23] flex items-center justify-center py-6 px-4">
      <div className="w-full rounded-[14px] border border-[#23263a] bg-[#23263a]/60 shadow-lg flex flex-col relative overflow-hidden" style={{minHeight: '90vh'}}>
        {/* Navbar */}
        <div className="border-b border-[#23263a] px-4 sm:px-8 pt-4 pb-2">{navbar}</div>
        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-row relative px-4 sm:px-8 py-8 overflow-x-auto">
          <div className="flex-1 z-10">{main}</div>
          {/* Blocos de código flutuantes à direita */}
          <div className="hidden md:flex flex-col gap-6 absolute right-0 top-0 h-full justify-center pr-8 z-0 pointer-events-none">
            {codeBlocks}
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-[#23263a] px-4 sm:px-8 py-3">{footer}</div>
      </div>
    </div>
  );
}
