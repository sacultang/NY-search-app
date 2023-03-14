import { Doc } from "../types/shared";
export const LOCALSTORAGE_KEY = {
  clip: "clip_news",
  history: "history",
};

export const getStoredClip = (key: string): Doc[] | [] => {
  const storedClip = localStorage.getItem(key);
  return storedClip ? JSON.parse(storedClip) : [];
};
export const setStoredClip = (item: Doc[] | [], key: string) => {
  localStorage.setItem(key, JSON.stringify(item));
};
