import { IconType } from "react-icons";

export type CardsOfPages = {
  id: number;
  title: string;
  uri: string;
  icon: IconType;
  active: boolean;
}[]