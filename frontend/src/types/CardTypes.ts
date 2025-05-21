export interface CardProps {
  title: string;
  description: string;
  image?: string;
  rating?: number;
  onClick?: () => void;
}