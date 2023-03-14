import React, { useContext, createContext, useState, useEffect } from "react";
import { getStoredClip, LOCALSTORAGE_KEY } from "../util/storageUtils";
import { Doc } from "../types/shared";
const storedClip = getStoredClip(LOCALSTORAGE_KEY.clip);

const initialContext = {
  clipNews: storedClip,
  setClipNews: (state: Doc[]) => {},
};
const UseClipContext = createContext(initialContext);

export const useClip = () => useContext(UseClipContext);

export function UseClipProvider({ children }: UseClipProviderType) {
  const [clipNews, setClipNews] = useState<Doc[] | []>([]);
  const value: ValueType = {
    clipNews,
    setClipNews,
  };
  useEffect(() => {
    setClipNews(storedClip);
  }, []);
  return (
    <UseClipContext.Provider value={value}>{children}</UseClipContext.Provider>
  );
}

type UseClipProviderType = { children: React.ReactNode };

interface ValueType {
  clipNews: Doc[] | [];
  setClipNews: React.Dispatch<React.SetStateAction<Doc[] | []>>;
}
