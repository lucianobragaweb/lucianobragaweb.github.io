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
    <div className="flex flex-col gap-6 relative overflow-visible">
      {/* Gradiente azul multicolorido com mais contraste no topo/esquerda */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[400px] rounded-full blur-3xl opacity-90 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #00ffb2 0%, #0099ff 35%, #00fff0 65%, #a259f7 100%)"
        }}
      ></div>
      {/* Outros gradientes de fundo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-tr from-[#7c3aed] via-[#a259f7] to-transparent blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#22d3ee] via-[#4fc3f7] to-[#7c3aed] blur-3xl opacity-40 pointer-events-none"></div>
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
