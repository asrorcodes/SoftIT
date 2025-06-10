import { memo, useEffect } from "react";
import image from "../../assets/images/tolinoy-square.png"; // Vite uchun to'g'rilangan import

const Moon = ({ onLoad, onLoadStart, spin = false, className = "", ...restProps }) => {
  useEffect(() => {
    if (typeof onLoadStart === "function") {
      onLoadStart();
    }

    const imagePreloader = new Image();
    imagePreloader.src = image;

    if (imagePreloader.complete) {
      if (typeof onLoad === "function") {
        onLoad();
      }
      imagePreloader.onload = null;
    } else {
      imagePreloader.onload = () => {
        if (typeof onLoad === "function") {
          onLoad();
        }
        imagePreloader.onload = null;
      };
    }
  }, []);

  return (
    <img
      {...restProps}
      src={image}
      width="auto"
      height="auto"
      alt="Moon Image"
      className={`${className} ${spin ? "animate-spin" : ""}`}
    />
  );
};

export default memo(Moon);
