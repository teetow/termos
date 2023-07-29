import { useRef, useState } from "react";
import "./App.css";
import SpriteText from "./SpriteText";

const getRandomWord = (len = 3) => {
  return new Array(len)
    .fill("")
    .map((_) => "abc".split("")[Math.floor(Math.random() * 3)]);
};

function App() {
  const [words, setWords] = useState("abcabc");
  const discoRef = useRef<number>(-1);
  const addWords = () => setWords((prev) => `${prev}${getRandomWord(64)}`);
  const randomizeWords = () =>
    setWords((prev) =>
      prev
        .split("")
        .map((char) => (Math.random() > 0.9 ? char : getRandomWord(1)))
        .join("")
    );

  const disco = () => {
    const step = () => {
      randomizeWords();
      discoRef.current = requestAnimationFrame(step);
    };
    discoRef.current = requestAnimationFrame(step);
  };

  const stop = () => {
    cancelAnimationFrame(discoRef.current);
    discoRef.current = -1;
  };

  return (
    <>
      <h3>behold</h3>
      <button onClick={addWords}>add more chars ({words.length})</button>
      <button onClick={randomizeWords}>randomize</button>
      <button onClick={disco}>Disco</button>
      <button onClick={stop}>jfc just stop</button>
      <SpriteText>{words}</SpriteText>
    </>
  );
}

export default App;
