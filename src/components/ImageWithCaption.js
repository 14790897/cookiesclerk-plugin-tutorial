// ImageWithCaption.js
import React from 'react';

const ImageWithCaption = ({ src, caption, description }) => {
  return (
    <div className="flex flex-col items-center px-4 -py-4">
      <div className="w-64 h-64 overflow-hidden relative">
        <img src={src} alt={caption} className="absolute inset-0 w-full h-full object-contain object-center" />
      </div>
      <h2 className="text-xl font-bold mb-2">{caption}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ImageWithCaption;
