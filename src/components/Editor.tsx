import React from "react";

const tabs = [
  { label: "personal-info", active: true },
  { label: "education", active: false },
  { label: "x", active: false },
];

const code = `/**\n * About me\n * I have 5 years of experience in web\n * development lorem ipsum dolor sit amet,\n * consectetur adipiscing elit, sed do eiusmod\n * tempor incididunt ut labore et dolore\n * magna aliqua. Ut enim ad minim veniam,\n * quis nostrud exercitation ullamco laboris\n * nisi ut aliquip ex ea commodo consequat.\n * Duis aute irure dolor in reprehenderit in\n * voluptate velit esse cillum dolore eu fugiat\n * nulla pariatur. Excepteur sint occaecat\n * officia deserunt mollit anim id est laborum.\n */`;

export default function Editor() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Tabs */}
      <div className="flex items-center border-b border-[#23263a] bg-[#23263a]/60">
        {tabs.map((tab, idx) => (
          <div
            key={tab.label}
            className={`px-4 py-2 font-mono text-sm cursor-pointer border-r border-[#23263a] ${tab.active ? "text-white" : "text-[#b3b9c5] hover:text-white"} ${tab.active ? "border-b-2 border-r-0 border-[#ffb454]" : ""}`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {/* Editor area */}
      <pre className="flex-1 font-mono text-[#b3b9c5] text-[15px] bg-transparent p-6 whitespace-pre-wrap select-text">
        {code}
      </pre>
    </div>
  );
}
