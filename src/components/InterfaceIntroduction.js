// InterfaceIntroduction.js
import React from 'react';
import ImageWithCaption from './ImageWithCaption';

const InterfaceIntroduction = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="text-2xl font-bold text-center">Interface Introduction</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageWithCaption
          src="prop1.jpg"
        //   caption="Image 1"
          description="This is the description for image 1."
        />
        <ImageWithCaption
          src="prop2.jpg"
        //   caption="Image 2"
          description="This is the description for image 2."
        />
      </div>
    </div>
  );
};

export default InterfaceIntroduction;
