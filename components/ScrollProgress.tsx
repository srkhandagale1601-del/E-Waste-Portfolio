'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? window.scrollY / total : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress-bar" style={{ height: `${Math.min(progress * 100, 100)}%` }} />
      <div className="progress-label">{Math.round(progress * 100)}%</div>
    </div>
  );
}
