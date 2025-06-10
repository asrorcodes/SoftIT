import { createElement, useState, useCallback, memo } from "react";

const SPOTLIGHT_SIZE = 400;

const Spotlight = memo(({ element = "h1", children, className = "", ...restProps }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((event) => {
    const { currentTarget, clientX, clientY } = event;
    const bounds = currentTarget.getBoundingClientRect();
    const x = clientX - bounds.left - SPOTLIGHT_SIZE / 2;
    const y = clientY - bounds.top - SPOTLIGHT_SIZE / 2;
    setPosition({ x, y });
  }, []);

  const style = {
    backgroundImage:
      "radial-gradient(closest-side, rgba(255,255,255,0.25) 30%, transparent 70%)",
    backgroundPosition: `${position.x}px ${position.y}px`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${SPOTLIGHT_SIZE}px ${SPOTLIGHT_SIZE}px`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return createElement(
    element,
    {
      onMouseMove,
      style,
      className,
      ...restProps,
    },
    children
  );
});

export default memo(Spotlight);
