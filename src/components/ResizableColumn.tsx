"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";

interface ResizableColumnProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftMinWidth?: number;
  leftMaxWidth?: number;
  rightMinWidth?: number;
  rightMaxWidth?: number;
  initialLeftWidth?: number;
  resizerWidth?: number;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  resizerClassName?: string;
}

export default function ResizableColumn({
  leftContent,
  rightContent,
  leftMinWidth = 280,
  leftMaxWidth = 600,
  rightMinWidth = 280,
  rightMaxWidth = 800,
  initialLeftWidth,
  resizerWidth = 8,
  className = "",
  leftClassName = "",
  rightClassName = "",
  resizerClassName = ""
}: ResizableColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth || 0);
  const [rightWidth, setRightWidth] = useState(0);
  const isResizing = useRef(false);

  // Atualiza largura do container e colunas ao montar e ao redimensionar
  useEffect(() => {
    const updateWidths = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      let initialLeft = initialLeftWidth || Math.max(leftMinWidth, Math.min(leftMaxWidth, (width - resizerWidth) / 2));
      let initialRight = width - initialLeft - resizerWidth;
      // Garante limites
      if (initialRight < rightMinWidth) {
        initialRight = rightMinWidth;
        initialLeft = width - rightMinWidth - resizerWidth;
      }
      if (initialRight > rightMaxWidth) {
        initialRight = rightMaxWidth;
        initialLeft = width - rightMaxWidth - resizerWidth;
      }
      setLeftWidth(initialLeft);
      setRightWidth(initialRight);
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [initialLeftWidth, leftMinWidth, leftMaxWidth, rightMinWidth, rightMaxWidth, resizerWidth]);

  const handleResizerMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = "col-resize";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      // Limites máximos para o resizer
      const minLeft = leftMinWidth;
      const maxLeft = containerWidth - rightMinWidth - resizerWidth;
      const maxLeftByCol = Math.min(leftMaxWidth, maxLeft);
      const minLeftByCol = Math.max(minLeft, containerWidth - rightMaxWidth - resizerWidth);
      const newLeft = Math.max(minLeftByCol, Math.min(maxLeftByCol, mouseX));
      const newRight = containerWidth - newLeft - resizerWidth;
      setLeftWidth(newLeft);
      setRightWidth(newRight);
    };
    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [containerWidth, leftMinWidth, leftMaxWidth, rightMinWidth, rightMaxWidth, resizerWidth]);

  return (
    <div ref={containerRef} className={`flex flex-row w-full h-full ${className}`} style={{position: 'relative'}}>
      {/* Coluna esquerda */}
      <div
        className={leftClassName}
        style={{
          width: leftWidth,
          minWidth: leftMinWidth,
          maxWidth: leftMaxWidth,
          height: '100%'
        }}
      >
        {leftContent}
      </div>
      {/* Resizer */}
      <div
        onMouseDown={handleResizerMouseDown}
        className={`cursor-col-resize z-20 hover:bg-[#23263a]/40 transition ${resizerClassName}`}
        style={{
          width: resizerWidth,
          userSelect: "none",
          height: '100%'
        }}
      />
      {/* Coluna direita */}
      <div
        className={rightClassName}
        style={{
          width: rightWidth,
          minWidth: rightMinWidth,
          maxWidth: rightMaxWidth,
          height: '100%'
        }}
      >
        {rightContent}
      </div>
    </div>
  );
}
