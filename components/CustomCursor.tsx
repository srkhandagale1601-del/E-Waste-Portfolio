'use client';

import { useEffect, useState } from 'react';

type CursorMode = 'default' | 'project' | 'assignment' | 'image' | 'link';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || window.innerWidth < 900) return;

    const onPointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const updateMode = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return setMode('default');

      if (target.closest('.project-row')) return setMode('project');
      if (target.closest('.assignment-card')) return setMode('assignment');
      if (target.closest('.gallery-card, .lightbox__frame, img')) return setMode('image');
      if (target.closest('a, button, .nav-link, .mobile-nav-link')) return setMode('link');
      setMode('default');
    };

    const onPointerLeave = () => setVisible(false);

    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerover', updateMode);
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', updateMode);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  if (isTouch) return null;

  return (
    <div className={`custom-cursor ${visible ? 'visible' : ''} ${mode}`} aria-hidden="true" style={{ left: position.x, top: position.y }}>
      <span>{mode === 'project' ? 'VIEW' : mode === 'assignment' ? 'OPEN' : mode === 'image' ? 'ZOOM' : ''}</span>
    </div>
  );
}
