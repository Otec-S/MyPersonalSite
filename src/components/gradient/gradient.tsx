import { useState, useEffect } from "react";
import styles from "./gradient.module.css";

function Gradient() {
  const [position, setPosition] = useState({ x: 0, y: 401 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (window.innerWidth >= 1000) {
        setPosition({ x: e.clientX, y: e.clientY });
      } else {
        setPosition({ x: 0, y: 401 });
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setPosition({ x: 0, y: 401 });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={styles.gradient}
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, var(--color-gradient), transparent 80%)`,
      }}
    />
  );
}

export default Gradient;
