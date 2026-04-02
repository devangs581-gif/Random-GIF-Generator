import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import myGif from "../Assets/gif2.gif";

export default function useGif(input) {

  const [gif, setGif] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchData = useCallback(async (tag) => {
    setLoader(true);

    const url = tag
      ? `https://api.giphy.com/v1/stickers/random?api_key=aILe9ciZJxftAx1MnYsYglxKRrUlOEJ5&tag=${tag}&rating=g`
      : `https://api.giphy.com/v1/stickers/random?api_key=aILe9ciZJxftAx1MnYsYglxKRrUlOEJ5&rating=g`;

    try {
      const { data } = await axios.get(url);
      const output = data.data.images.fixed_height.url;
      setGif(output || "");
    } catch (e) {
      console.log("ERROR", e);
      setGif(myGif);
    }

    setLoader(false);
  }, []);

  useEffect(() => {
    fetchData(input);
  }, [fetchData, input]);

  return { gif, loader, fetchData };
}
