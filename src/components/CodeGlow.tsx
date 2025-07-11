import React from "react";
import { Highlight, themes } from "prism-react-renderer";

const code = `function initializeModelChunk<T>(chunk: ResolvedModelChunk<T>) {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;

const gradient = "radial-gradient(circle at 60% 40%, #4fc3f7 0%, #7c3aed 40%, #22d3ee 70%, #23263a 100%)";

export default function CodeGlow() {
  return (
    <div className="flex flex-col gap-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative rounded-xl border border-[#23263a] shadow-lg overflow-x-auto"
          style={{
            background: gradient,
            boxShadow:
              i === 1
                ? "0 0 60px 10px #4fc3f7, 0 0 120px 40px #7c3aed, 0 0 120px 60px #22d3ee, 0 0 120px 80px #23263a"
                : "0 0 30px 0px #23263a",
            opacity: i === 1 ? 1 : 0.55,
            filter: i === 1 ? "none" : "blur(0.5px)",
          }}
        >
          <Highlight code={code} language="tsx" theme={themes.nightOwl}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={"font-mono text-xs bg-transparent px-5 py-4 rounded-xl " + className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      ))}
    </div>
  );
}
