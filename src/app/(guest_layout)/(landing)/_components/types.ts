export interface Testimonial {
  name: string;
  title: string;
  school: string;
  rating: number;
  review: string;
  img_url: string;
}

export type IconType = "guidance" | "learning" | "default";
export type PositionType = "top" | "bottom";
export type CardStyleType = "default" | "rotated" | "mirrored";
export type ArrowIconType = "default" | "inverse";

export interface LandingDescriptionCardProps {
  position: PositionType;
  iconType: IconType;
  title: string;
  subtitle: string;
  subtitle2: string;
  description: string;
  cardStyle: CardStyleType;
  arrowPosition: string;
  arrowIconType: ArrowIconType;
}

export type FaqType = {
  question: string,
  answer: string;
}