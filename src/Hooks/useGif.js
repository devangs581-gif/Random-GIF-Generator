import axios from 'axios';
import { useState, useEffect } from 'react';
import myGif from "../Assets/gif2.gif";

export default function useGif(input) {

  const randomUrl = `https://api.giphy.com/v1/stickers/random?api_key=aILe9ciZJxftAx1MnYsYglxKRrUlOEJ5&rating=g`;

  const tagUrl = `https://api.giphy.com/v1/stickers/random?api_key=aILe9ciZJxftAx1MnYsYglxKRrUlOEJ5&tag=${input}&rating=g`;

  const [gif, setGif] = useState(null);
  const [loader, setLoader] = useState(false);

  async function fetchData(tag) {
    setLoader(true);

    const url = tag ? tagUrl : randomUrl;

    try {
      const { data } = await axios.get(url);

      // ✅ use smaller gif for faster loading
      const output = data.data.images.fixed_height_small.url;

      setGif(output || "");
    } catch (e) {
      console.log("ERROR", e);
      setGif(myGif);
    }

    setLoader(false);
  }

  useEffect(() => {
    fetchData(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return { gif, loader, fetchData };
}
