import { useState, useEffect } from "react";
import styles from "./gradient.module.css";

function Gradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
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
