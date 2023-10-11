// ? REACT IMPORTS
import { useState } from "react";

//? LIBRARY IMPORTS
import {
  ArrowBigLeft,
  ArrowBigRight,
  Circle,
  CircleDot,
  CircleDotIcon,
} from "lucide-react";

// ?STYLES IMPORTS
import "./image-slider.css";

// STEP ONE: defining types
type ImageSliderProps = {
  imageURLs: string[];
};

export function ImageSlider({ imageURLs }: ImageSliderProps) {
  //   STEP TWO: store the index of the image of arrays
  const [imageIndex, setImageIndex] = useState(0);

  // STEP TWO code out helper function

  const showNextImage = () => {
    setImageIndex((index) => {
      // loop all the way around at the end of the slide
      if (index === imageURLs.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      // loop all the way around at the end of the slide
      if (index === 0) return imageURLs.length - 1;
      return index - 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Second method of image slider */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageURLs.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageURLs.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
