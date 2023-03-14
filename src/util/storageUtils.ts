import { Doc } from "../types/shared";
export const LOCALSTORAGE_KEY = {
  clip: "clip_news",
  history: "history",
};
export type StoredType = Doc[] | [];
export const getStoredClip = (key: string): StoredType => {
  const storedClip = localStorage.getItem(key);
  return storedClip ? JSON.parse(storedClip) : [];
};
export const setStoredClip = (item: StoredType, key: string) => {
  localStorage.setItem(key, JSON.stringify(item));
};
export const getStoredHistory = (key: string): string[] => {
  const storedHistory = localStorage.getItem(key);
  return storedHistory ? JSON.parse(storedHistory) : [];
};
export const setStoredHistory = (item: string[], key: string) => {
  localStorage.setItem(key, JSON.stringify(item));
};
