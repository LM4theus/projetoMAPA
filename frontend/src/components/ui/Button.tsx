"use client";
import arrowicon from "../../assets/arrow-icon.png";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  variant?: "continue" | "back" | "other";
}

function Button({
  children,
  onClick,
  className,
  variant = "continue",
}: ButtonProps) {
  if (variant === "back") {
    return (
      <button className="ml-1 w-11 h-11" onClick={onClick}>
        <img src={arrowicon} alt="" />
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`h-20 w-64 bg-[#00497D] rounded-2xl text-white text-4xl font-bold ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;
