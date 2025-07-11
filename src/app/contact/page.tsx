"use client";
import React, { useState } from "react";
import { Mail, Phone, Youtube, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import ResizableColumn from "@/components/ResizableColumn";

const contacts = [
  { label: "user@gmail.com", icon: <Mail size={16} className="inline mr-1 text-[#b3b9c5]" /> },
  { label: "+3598246359", icon: <Phone size={16} className="inline mr-1 text-[#b3b9c5]" /> },
];
const socials = [
  { label: "YouTube", icon: <Youtube size={16} className="inline mr-1 text-[#fff]" />, link: "#" },
  { label: "dev.to", icon: <ExternalLink size={16} className="inline mr-1 text-[#b3b9c5]" />, link: "#" },
  { label: "Instagram", icon: <ExternalLink size={16} className="inline mr-1 text-[#b3b9c5]" />, link: "#" },
  { label: "Twich", icon: <ExternalLink size={16} className="inline mr-1 text-[#b3b9c5]" />, link: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const isValid = form.name.length > 0 && form.email.length > 0 && form.message.length > 0;

  const formContent = (
    <section className="flex flex-col justify-center items-center px-8 py-12">
      <form className="w-full max-w-md flex flex-col gap-4">
        <label className="text-[#b3b9c5] text-sm mb-1">_name:</label>
        <input
          className="bg-[#101426] border border-[#353a55] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-[#7c3aed] transition"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          autoComplete="off"
        />
        <label className="text-[#b3b9c5] text-sm mb-1">_email:</label>
        <input
          className="bg-[#101426] border border-[#353a55] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-[#7c3aed] transition"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          autoComplete="off"
        />
        <label className="text-[#b3b9c5] text-sm mb-1">_message</label>
        <textarea
          className="bg-[#101426] border border-[#353a55] rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-[#7c3aed] transition min-h-[100px]"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="your message here ..."
        />
        <button
          type="submit"
          className="mt-2 bg-[#23263a] text-[#b3b9c5] border border-[#23263a] rounded px-4 py-2 text-sm font-semibold hover:bg-[#23263a]/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          submit-message
        </button>
      </form>
    </section>
  );

  const editorContent = (
    <section className="flex h-full flex-col justify-center items-center px-8 py-12 border-l border-[#23263a] bg-[#181b2b]">
      <pre className="w-full max-w-lg h-full min-h-[320px] bg-transparent text-[#b3b9c5] text-[15px] font-mono p-6 rounded-lg overflow-x-auto select-text">
{`const button = document.querySelector('#sendBtn');

const message = {
  name: "${form.name}",
  email: "${form.email}",
  message: "${form.message}",
  date: "${new Date().toDateString()}"
}

button.addEventListener('click', () => {
  form.send(message);
})`}
      </pre>
    </section>
  );

  return (
    <div className="w-full h-full min-h-[80vh] flex flex-row font-mono bg-[#101426] text-[#b3b9c5]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#23263a] bg-[#181b2b] flex flex-col py-6 px-4 select-none">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 font-bold text-white text-base">
            <ChevronDown size={16} /> contacts
          </div>
          <ul className="ml-4">
            {contacts.map((c) => (
              <li key={c.label} className="flex items-center gap-2 mb-2 text-[#b3b9c5] text-sm">
                {c.icon}
                {c.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2 font-bold text-white text-base">
            <ChevronRight size={16} /> find-me-also-in
          </div>
          <ul className="ml-4">
            {socials.map((s) => (
              <li key={s.label} className="flex items-center gap-2 mb-2 text-[#b3b9c5] text-sm">
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#ffb454]">
                  {s.icon}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Colunas redimensionáveis */}
      <ResizableColumn
        leftContent={formContent}
        rightContent={editorContent}
        leftMinWidth={280}
        leftMaxWidth={600}
        rightMinWidth={300}
        rightMaxWidth={800}
        className="w-full h-full"
      />
    </div>
  );
}
