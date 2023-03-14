import { Doc } from "../types/shared";
export const checkClip = (clipnews: Doc[], newsID: string) => {
  return clipnews?.find((clipId: Doc) => clipId._id === newsID);
};

export const filterClip = (clipnews: Doc[], newsID: string) => {
  return clipnews?.filter((clipId: Doc) => clipId._id !== newsID);
};
