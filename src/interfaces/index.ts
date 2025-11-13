import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  onClick?: () => void;
}
