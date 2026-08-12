'use client';

import { useRef, useState } from 'react';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button'
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    setOffset({
      x: Math.max(-10, Math.min(10, x * 0.12)),
      y: Math.max(-8, Math.min(8, y * 0.12))
    });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`magnetic-button ${className}`.trim()}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </button>
  );
}
