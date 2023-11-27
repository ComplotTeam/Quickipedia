import { Article } from "@/app/page";

export type UserData = {
  email: string;
  username: string;
  bookmarks: Article[];
};