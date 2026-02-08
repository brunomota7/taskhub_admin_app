"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  title?: string;
  onPress: () => void;
  variant?: "default" | "outline" | "ghost";
  style?: string;
  textStyle?: string;
  icon?: React.ReactNode;
  isIconOnly?: boolean;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  variant = "default",
  style,
  textStyle,
  icon,
  isIconOnly = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onPress}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center rounded-md font-semibold transition-all",
        "px-5 py-3 gap-2",
        isIconOnly && "w-11 h-11 rounded-full p-0",
        variant === "default" && "bg-[#1380ed] text-white hover:opacity-85",
        variant === "outline" &&
          "border border-[#1380ed] text-[#1380ed] hover:opacity-85",
        variant === "ghost" && "bg-transparent text-gray-600 hover:opacity-85",
        disabled && "opacity-50 cursor-not-allowed",
        style,
      )}
    >
      {icon}
      {title && <span className={clsx(textStyle)}>{title}</span>}
    </button>
  );
}
