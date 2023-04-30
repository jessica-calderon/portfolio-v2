import React, { useState } from "react";

interface Props {
  src: string;
  alt?: string;
  onClick?: () => void;
}

const placeholderImage = "https://via.placeholder.com/300x300";

const ImagePlaceholder: React.FC<Props> = ({ src, alt = "", onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative flex items-center justify-center w-48 h-48 bg-gray-100">
      {!isLoaded && <img className="absolute inset-0 w-full h-full object-cover" src={placeholderImage} alt={alt} />}
      <img
        className={`absolute inset-0 w-full h-full object-cover ${isLoaded ? "" : "hidden"}`}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onClick={onClick}
      />
    </div>
  );
};

export default ImagePlaceholder;
