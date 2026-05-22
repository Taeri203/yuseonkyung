import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };

export type Agenda = {
  id: string;
  category: string;
  title: string;
  problem: string[];
  pledges: string[];
  message: string;
  icon: LucideIcon;
};

export type District = {
  name: string;
  title: string;
  summary: string;
  keywords?: string[];
  pledges: string[];
};

export type Generation = {
  audience: string;
  title: string;
  pledges: string[];
  icon: LucideIcon;
};

export type MapCategory = "전체" | "환경" | "공간" | "보행" | "청년" | "아동" | "안전" | "노동";

export type MapMarker = {
  title: string;
  category: Exclude<MapCategory, "전체">;
  area: string;
  issue: string;
  pledge: string;
  x: number;
  y: number;
};

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};
