import { useState } from "react";

export const ImageWithFallback = ({ fallbackSrc, src, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const onError = () => setImageSrc(fallbackSrc);

  return (
    <img src={imageSrc ? imageSrc : fallbackSrc} onError={onError} {...props} />
  );
};
