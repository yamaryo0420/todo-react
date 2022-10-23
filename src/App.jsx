import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickCountUp = () => {
    setNum(num * 2);
  };
  const [num, setNum] = useState(1);
  const contentStyle = {
    color: "blue",
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <ColorfulMessage color="red">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
