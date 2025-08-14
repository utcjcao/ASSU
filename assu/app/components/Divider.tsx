import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
}

const Divider: React.FC<DividerProps> = ({
  className = "",
  width,
  height,
  color = "var(--color-gray)",
  margin,
}) => {
  return (
    <div
      className={`${styles.divider} ${className}`}
      style={{
        ...(width && { width }),
        ...(height && { height }),
        ...(margin && { margin }),
        ...(color && ({ "--divider-color": color } as React.CSSProperties)),
      }}
    >
      <div
        className={styles.dividerLine}
        style={{
          ...(color && { borderTopColor: color }),
        }}
      />
    </div>
  );
};

export default Divider;
