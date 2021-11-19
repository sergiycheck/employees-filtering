import React from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { alphabetFilterTypes } from "./alpabetFilterTypes";

export const AlphabetElements = () => {
  const arrValuesFilterTypes = Object.values(alphabetFilterTypes);
  const renderedFilterLinks = arrValuesFilterTypes.map((filter, i) => {
    return (
      <ElementWithLetterLink key={i} letterFilter={filter}>
        <>
          {filter}
          {i < arrValuesFilterTypes.length - 1 && ", "}
        </>
      </ElementWithLetterLink>
    );
  });

  return <div className="visibility-filters">{renderedFilterLinks}</div>;
};

type filterParams = {
  filter: string;
};

type elementWithLetterProps = {
  letterFilter: string;
  children: JSX.Element;
};
export const ElementWithLetterLink = (props: elementWithLetterProps) => {
  const { letterFilter, children } = props;
  const toRes = letterFilter === alphabetFilterTypes.all ? "/" : letterFilter;
  const { filter } = useParams<filterParams>();

  return (
    <Link
      to={toRes}
      className={classNames(
        "filter",
        ((!filter && letterFilter === alphabetFilterTypes.all) || filter === letterFilter) && "filter-active"
      )}
    >
      {children}
    </Link>
  );
};
