import * as React from "react";

interface OfficinaCardProps {
  title: string;
  subheader?: string;
  image: string;
  alt?: string;
  description: string;
  expandedContent?: React.ReactNode;
  reverse?: boolean;
}

const OfficinaCard: React.FC<OfficinaCardProps> = ({
  title,
  subheader,
  image,
  alt,
  description,
  expandedContent,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-12 bg-white/90 rounded-2xl shadow-2xl border border-orange-100 transition-transform hover:scale-[1.03]`}
      style={{ minHeight: 420 }}
    >
      {/* Text */}
      <div className="md:w-1/2 w-full p-10 flex flex-col gap-4">
        <h3 className="text-3xl font-extrabold mb-2 text-orange-600">{title}</h3>
        {subheader && (
          <div className="text-orange-400 mb-3 font-semibold italic text-lg">
            {subheader}
          </div>
        )}
        <p className="mb-3 text-gray-700 text-lg">{description}</p>
        {expandedContent && (
          <div className="bg-orange-50/80 border border-orange-200 rounded-xl p-4 mt-2 text-gray-700 text-base">
            {expandedContent}
          </div>
        )}
      </div>
      {/* Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        {image.endsWith(".mp4") ? (
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-2xl w-full max-w-xl object-cover border-4 border-orange-100"
            style={{ minHeight: 320, maxHeight: 400 }}
            poster="/img5.jpg" // opzionale: anteprima
          />
        ) : (
          <img
            src={image}
            alt={alt || title}
            className="rounded-2xl shadow-2xl w-full max-w-xl object-cover border-4 border-orange-100 transition-transform duration-300 hover:scale-105"
            style={{ minHeight: 320, maxHeight: 400 }}
          />
        )}
      </div>
    </div>
  );
};

export default OfficinaCard;
