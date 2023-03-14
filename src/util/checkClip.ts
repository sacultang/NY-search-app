import { Doc } from "../types/shared";
export type newsArr = Doc[] | [];

export const checkClip = (clipnews: Doc[], newsID: string) => {
  return clipnews?.find((clipId) => clipId._id === newsID);
};

export const filterClip = (clipnews: Doc[], newsID: string) => {
  return clipnews?.filter((clipId) => clipId._id !== newsID);
};
