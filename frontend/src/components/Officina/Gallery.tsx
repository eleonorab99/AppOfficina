import React, { useState, useEffect } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia qui la velocità (ms)
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-3xl h-[350px] md:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
        <img
          src={images[current]}
          alt={`Galleria immagine ${current + 1}`}
          className="object-cover w-full h-full transition-all duration-700"
        />
        {/* Indicatori */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${idx === current ? "bg-orange-500" : "bg-white/70 border border-orange-300"} transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;