import React, { useEffect, useState } from "react";
import { Doc } from "../../types/shared";
import { getStoredClip, setStoredClip } from "../../util/storageUtils";
const useClipNews = () => {
  const storageNews = getStoredClip();
  const [clipNews, setClipNews] = useState<Doc[]>([]);
  console.log(clipNews, "hooks render");
  useEffect(() => {
    setClipNews(storageNews);
  }, []);

  return { clipNews, setClipNews };
};

export default useClipNews;
