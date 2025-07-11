"use client";
import React from "react";
import { Highlight } from "prism-react-renderer";

const code = `
const page = findPage('you-were-looking-for');

if (!page) {
  console.log("Oops! Looks like you took a wrong turn in the codebase.");
  console.log("But hey, since you're here ...");
  console.log("🧭 Go back to the homepage and explore more cool stuff!");
  throw new Error("404: PageNotFoundError 😢");
}

/* Suggestions:
 * - Check the URL for typos
 * - Use the site navigation
 * - Or hit CMD+Z in real life 😅
 */

redirect('home');
`;

export default function NotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#20222e] font-mono text-[#b3b9c5]">
      <div className="flex flex-row w-full max-w-7xl items-center justify-center gap-8 px-4">
        {/* 404 grande à esquerda */}
        <div className="text-[8rem] flex-1 leading-none font-bold text-[#a3adc2] select-none relative" style={{textShadow: '2px 2px 0 #23263a, 4px 4px 0 #23263a, 6px 6px 0 #23263a'}}>
          404
        </div>
        {/* Bloco de código com highlight */}
        <div className="bg-transparent text-[1.1rem] p-0 m-0 text-left whitespace-pre-wrap select-text min-w-0">
          <Highlight code={code} language="js">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, background: "transparent" }}>
                {tokens.map((line, i) => {
                  const { key: lineKey, ...lineProps } = getLineProps({ line, key: i });
                  return (
                    <div key={String(lineKey)} {...lineProps}>
                      {line.map((token, key) => {
                        const { key: tokenKey, ...rest } = getTokenProps({ token, key });
                        return <span key={String(tokenKey)} {...rest} />;
                      })}
                    </div>
                  );
                })}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
}
