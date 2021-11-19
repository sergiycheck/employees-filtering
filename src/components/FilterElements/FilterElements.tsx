import React, { useMemo, useRef } from "react";
import { chunk } from "lodash";

export const AlphabetElements = () => {
  const onLetterClick = (letterValue: string) => {
    console.log("button click letter value", letterValue);
  };
  const groupingNum = 3;

  const memoAlpabetArr = useMemo(function getAlphabetArr() {
    let i: number;
    const alpabetArr = [...Array(26)].map((_) => (++i).toString(36), (i = 9));

    const chunks = chunk(alpabetArr, groupingNum);
    const reducedChunks = chunks.reduce((prev, curr) => {
      prev = prev.concat(curr.join(" "));
      return prev;
    }, []);

    return reducedChunks;
  }, []);

  const renderedButtons = memoAlpabetArr.map((groupChars, i) => {
    return (
      <ElementWithLetter key={i} letter={groupChars} clickLetterCallBack={onLetterClick}>
        <>{groupChars} </>
      </ElementWithLetter>
    );
  });

  return <div>{renderedButtons}</div>;
};

type elementWithLetterProps = {
  letter: string;
  clickLetterCallBack: (letterValue: string) => void;
  children: JSX.Element;
};
export const ElementWithLetter = (props: elementWithLetterProps) => {
  const { letter, clickLetterCallBack, children } = props;

  const refLetter = useRef(letter);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = refLetter.current;
    clickLetterCallBack(value);
  };
  return (
    <button type="button" onClick={onButtonClick}>
      {children}
    </button>
  );
};
