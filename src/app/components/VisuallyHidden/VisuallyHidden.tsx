"use client"; //to be removed
// This component is designed to be used in a client-side React application.
// It provides a way to visually hide content while keeping it accessible to screen readers.
import React, { ReactNode, useEffect, useState, HTMLAttributes } from "react";
import styles from "./VisuallyHidden.module.scss";

interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  className = "",
  ...delegated
}) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <span className={styles.showWrapper}>{children}</span>;
  }

  return (
    <span className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
