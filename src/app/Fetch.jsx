// Fetch an image from the API and display it

import { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

export const Fetch = () => {
  const [imageUrl, setImageUrl] = useState("");
  
  useEffect(()=>{
    const apiCall = async () => { // 바로 async 함수를 쓸 수 없음!
      const url = await fetchImage(); // 만약 async가 종료되기 전에 컴포넌트가 unmount되면 어떻게 될까? -> 오류를 뱉음
      setImageUrl(url);
    };
    apiCall();
  }, []);

  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};
