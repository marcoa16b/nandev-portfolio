import React, { useRef, useEffect } from "react";

const BackgroundCircle = () => {
  const circleRef = useRef(null);
  const size = 700;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      const xPos = e.clientX - size / 2;
      const yPos = e.clientY - size / 2;
      circle.style.left = xPos + "px";
      circle.style.top = yPos + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className={`fixed z-0 bg-radial-cursor blur-2xl no-scrollbar w-[700px] h-[700px] rounded-full pointer-events-none`}
    />
  );
};

export default BackgroundCircle;
