"use client";
import React, { useState } from "react";

const Button = ({
  children = "Click Me",
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    padding: "12px 24px",
    fontWeight: "600",
    borderRadius: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transform: hovered ? "scale(1.03)" : "scale(1)",
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",
  };

  const variants = {
    primary: {
      background: hovered
        ? "linear-gradient(to right, #6366F1, #3B82F6)"
        : "linear-gradient(to right, #2563EB, #4F46E5)",
      color: "white",
    },
    secondary: {
      background: hovered ? "#F3F4F6" : "#FFFFFF",
      color: "#374151",
      border: "1px solid #D1D5DB",
    },
    danger: {
      background: hovered
        ? "linear-gradient(to right, #EC4899, #F87171)"
        : "linear-gradient(to right, #EF4444, #DB2777)",
      color: "white",
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
