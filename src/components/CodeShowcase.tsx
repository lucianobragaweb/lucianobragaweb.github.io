import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Star, MessageCircle } from "lucide-react";

const snippets = [
  {
    user: "@lucianobragaweb",
    created: "5 months ago",
    details: "details",
    stars: 3,
    code: `function initializeModelChunk<T>(chunk: ResolvedModelChunk<T>) {\n  const value: T = parseModel(chunk._response, chunk._value);\n  const initializedChunk: InitializedChunk<T> = (chunk: any);\n  initializedChunk._status = INITIALIZED;\n  initializedChunk._value = value;\n  return value;\n}`,
    language: "tsx",
  },
  {
    user: "@lucianobragaweb",
    created: "9 months ago",
    details: "details",
    stars: 0,
    code: `export function parseModelTuple(\n  response: Response,\n  value: {[key: string]: JSONValue} | ReadonlyArray<JSONValue>,\n): any {\n  const tuple: [mixed, mixed, mixed, mixed] = (value: any);\n}`,
    language: "tsx",
  },
];

export default function CodeShowcase() {
  return (
    <div className="flex flex-col h-full w-full p-6 gap-6">
      <div className="text-[#6c7680] font-mono text-[15px] mb-2">// Code snippet showcase:</div>
      {snippets.map((s, idx) => (
        <div key={idx} className="mb-4 bg-[#181B23] rounded-lg border border-[#23263a] shadow-md p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#b3b9c5] font-mono text-sm">{s.user}</span>
            <span className="text-[#6c7680] text-xs">Created {s.created}</span>
            <span className="ml-auto flex items-center gap-1 text-[#6c7680] text-xs cursor-pointer"><MessageCircle size={14} />{s.details}</span>
            <span className="flex items-center gap-1 text-[#b3b9c5] text-xs"><Star size={14} />{s.stars} stars</span>
          </div>
          <Highlight code={s.code} language={s.language} theme={themes.nightOwl}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={"font-mono text-xs bg-transparent px-3 py-2 rounded " + className} style={style}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });
                  const { key: lineKey, ...linePropsWithoutKey } = lineProps;
                  return (
                    <div key={i} {...linePropsWithoutKey}>
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token, key });
                        const { key: tokenKey, ...tokenPropsWithoutKey } = tokenProps;
                        return <span key={key} {...tokenPropsWithoutKey} />;
                      })}
                    </div>
                  );
                })}
              </pre>
            )}
          </Highlight>
        </div>
      ))}
    </div>
  );
}
