import { useState, useEffect } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <>
      <div
        className="border-[2px] border-red-cm rounded-full w-[30px] h-[30px] translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[-99] fixed"
        style={cursorStyle}
      ></div>
    </>
  );
}

export default CustomCursor;
