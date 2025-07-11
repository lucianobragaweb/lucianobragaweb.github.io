import React from "react";
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import CodeShowcase from "@/components/CodeShowcase";

export default function AboutPage() {
  return (
    <div className="w-full h-full min-h-[80vh] flex flex-row">
      {/* Sidebar - largura fixa */}
      <aside className="w-[260px] min-w-[200px] max-w-[300px] border-r border-[#23263a] bg-[#23263a]/60 flex flex-col">
        <Sidebar />
      </aside>
      {/* Editor central e showcase dividem igualmente o espaço restante */}
      <section className="flex-1 flex flex-row">
        <div className="w-1/2 border-r border-[#23263a] bg-[#23263a]/40 flex flex-col">
          <Editor />
        </div>
        <div className="w-1/2 bg-[#23263a]/60 flex flex-col">
          <CodeShowcase />
        </div>
      </section>
    </div>
  );
}
