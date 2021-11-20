import React, { useMemo, useRef } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { selectSelectedLettersFilter, selectMaxLettersSelected, concatRemoveLetterFilter } from "../Users/usersSlice";

function getAlphabetArr() {
  let i: number;
  const alphabetArr = [...Array(26)].map((_) => (++i).toString(36), (i = 9));
  return alphabetArr;
}

export const AlphabetElements = () => {
  const memoAlphabetArr = useMemo(getAlphabetArr, []);
  const renderedButtons = memoAlphabetArr.map((groupChars, i) => {
    return (
      <ElementWithLetter key={i} letter={groupChars}>
        <>{groupChars} </>
      </ElementWithLetter>
    );
  });

  return <div>{renderedButtons}</div>;
};

type elementWithLetterProps = {
  letter: string;
  children: JSX.Element;
};
export const ElementWithLetter = (props: elementWithLetterProps) => {
  const { letter, children } = props;

  const dispatch = useAppDispatch();
  const selectedLetters = useAppSelector(selectSelectedLettersFilter);
  const maxAllowedToSelect = useAppSelector(selectMaxLettersSelected);

  const refLetter = useRef(letter);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = refLetter.current;
    if (getAlphabetArr().includes(value)) {
      dispatch(concatRemoveLetterFilter(value));
    }
  };

  const isActiveLetter = selectedLetters ? selectedLetters.includes(refLetter.current) : false;

  const isDisabledMemo = useMemo(
    function isButtonDisabled() {
      const someLettersSelected = Boolean(selectedLetters);
      const letterInNotActive = Boolean(!isActiveLetter);
      const maxReached = Boolean(selectedLetters.length === maxAllowedToSelect);
      if (someLettersSelected && letterInNotActive && maxReached) {
        return true;
      }
      return false;
    },
    [selectedLetters, isActiveLetter, maxAllowedToSelect]
  );

  return (
    <React.Fragment>
      <button
        type="button"
        disabled={isDisabledMemo}
        className={classNames(isActiveLetter && "buttonActive")}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </React.Fragment>
  );
};
