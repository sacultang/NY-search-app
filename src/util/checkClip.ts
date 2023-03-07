import { newsArr } from "./storageUtils";

export const checkClip = (clipnews: newsArr, newsID: string) => {
  return clipnews?.find((clipId) => clipId._id === newsID);
};

export const filterClip = (clipnews: newsArr, newsID: string) => {
  return clipnews?.filter((clipId) => clipId._id !== newsID);
};
