import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import myGif from "../Assets/gif2.gif";

export default function useGif(input) {

  const randomUrl = `https://api.giphy.com/v1/stickers/random?api_key=aILe9ciZJxftAx1MnYsYglxKRrUlOEJ5&tag=&rating=g`;
  const tagUrl = `https://api.giphy.com/v1/stickers/random?api_key=rFNpJd8gJqnBxIYuTToZ2ZYRADpBpCYd&tag=${input}&rating=r`;

  const [gif, setGif] = useState(null);
  const [loader, setLoader] = useState(false);

  // ✅ useCallback added here
  const fetchData = useCallback(async (input) => {
    setLoader(true);
    const url = input ? tagUrl : randomUrl;

    try {
      const { data } = await axios.get(url);
      const output = data.data.images.fixed_height.url;
      setGif(output || "");
    } catch (e) {
      console.log("ERROR");
      setGif(myGif);
    }

    setLoader(false);
  }, [tagUrl, randomUrl]);

  // ✅ now safe
 useEffect(() => {
  fetchData(input);
}, [fetchData, input]);

  return { gif, loader, fetchData };
}