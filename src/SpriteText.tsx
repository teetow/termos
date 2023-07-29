import { CSSProperties, PropsWithChildren } from "react";
import "./SpriteText.css";

const charIndex = {
  a: [0, 0],
  b: [1, 0],
  c: [2, 0],
};

const getChar = (char: keyof typeof charIndex) => charIndex[char];

type Props = PropsWithChildren<{}>;

export default function SpriteText({ children }: Props) {
  const s = children as string;
  return (
    <div className="roksw">
      {s.split("").map((char, i) => {
        const [x, y] =
          char in charIndex
            ? getChar(char as keyof typeof charIndex)
            : [-1, -1];
        return (
          <span
            key={`${i}-${char}`}
            className="char"
            style={{ "--x": x, "--y": y } as CSSProperties}
          />
        );
      })}
    </div>
  );
}
