"use client";

import React from "react";


type ButtonProps = {
  children: React.ReactNode;
  outline?: boolean;
    className?: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
};
const Button:React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  outline = false,
  fullWidth = false,
  className,
  onClick,
}) => {

  const buttonClasses = `${className}  px-4 py-2 rounded-40
  ${variant === "primary" ? "primary" : "sacondary"} 
  ${outline ? "border border-current bg-transparent" : ""} 
  ${fullWidth ? "w-full" : ""}
`.trim();;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;