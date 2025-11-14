import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface NewsCardProps {
  title: string;
  category?: string;
  description: string;
  date?: string;
  image: string;
  onClick?: () => void;
}

export interface NavLinkProps {
  to?: string;
  children: ReactNode;
  tab?: boolean;
  active?: boolean;
}

export interface NavigationDataProps {
  name: string;
  href: string;
}

export interface ArticleContentProps {
  category: string;
  title: string;
  author: string;
  published_date: string;
  image: string;
  content: string;
}

export interface StatProps {
  value: string;
  icon: React.FC;
}

export interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}
