import { Doc } from "../types/shared";
const LOCALSTORAGE_KEY = "clip_news";
export type newsArr = Doc[] | [];

export const getStoredClip = (): newsArr => {
  const storedClip = localStorage.getItem(LOCALSTORAGE_KEY);
  return storedClip ? JSON.parse(storedClip) : [];
};
export const setStoredClip = (news: Doc[]) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(news));
};
