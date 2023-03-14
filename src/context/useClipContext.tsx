import React, { useContext, createContext, useState, useEffect } from "react";
import {
  getStoredClip,
  LOCALSTORAGE_KEY,
  StoredType,
} from "../util/storageUtils";
const storedClip = getStoredClip(LOCALSTORAGE_KEY.clip);

const initialContext = {
  clipNews: storedClip,
  setClipNews: (state: StoredType) => {},
};
const UseClipContext = createContext(initialContext);

export const useClip = () => useContext(UseClipContext);

export function UseClipProvider({ children }: UseClipProviderType) {
  const [clipNews, setClipNews] = useState<StoredType>([]);
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
  clipNews: StoredType;
  setClipNews: React.Dispatch<React.SetStateAction<StoredType>>;
}
