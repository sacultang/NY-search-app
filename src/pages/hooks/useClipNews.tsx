import React, { useState } from "react";
import { getStoredClip } from "../../util/storageUtils";
const useClipNews = () => {
  const [clipNews, setClipNews] = useState(getStoredClip());

  return { clipNews, setClipNews };
};

export default useClipNews;
