'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const currentImage = useMemo(
    () => (activeIndex !== null ? images[activeIndex] : null),
    [activeIndex, images]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? images.length - 1 : (current - 1 + images.length) % images.length));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, images.length]);

  if (!images.length) {
    return <div className="gallery-empty">Images will be added soon.</div>;
  }

  const openImage = (index: number) => setActiveIndex(index);
  const showNext = () => setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  const showPrevious = () => setActiveIndex((current) => (current === null ? images.length - 1 : (current - 1 + images.length) % images.length));

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="gallery-card"
            onClick={() => openImage(index)}
            aria-label={`Open image ${index + 1}: ${image.alt}`}
          >
            <div className="gallery-card__image">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="gallery-card__meta">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
          </button>
        ))}
      </div>

      {currentImage && activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fullscreen image viewer" onClick={() => setActiveIndex(null)}>
          <div className="lightbox__inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">
              ×
            </button>

            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={showPrevious} aria-label="Previous image">
              ←
            </button>

            <div className="lightbox__frame">
              <Image src={currentImage.src} alt={currentImage.alt} fill sizes="90vw" />
            </div>

            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next image">
              →
            </button>

            <div className="lightbox__caption">
              <span>
                {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {images.length < 10 ? `0${images.length}` : images.length}
              </span>
              <p>{currentImage.caption || currentImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
