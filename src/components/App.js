import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (prop) => {
  let { slides } = prop;
  const [index, setIndex] = useState(0);

  const reset = () => {
    setIndex(0);
  };
  const prev = () => {
    setIndex(index - 1);
  };
  const next = () => {
    setIndex(index + 1);
  };
  return (
    <>
      <h1 data-testid="title"> {slides[index].title}</h1>
      <p data-testid="text"> {slides[index].text} </p>
      <button
        data-testid="button-restart"
        onClick={reset}
        disabled={index === 0}
      >
        {" "}
        Restart
      </button>
      <button data-testid="button-prev" onClick={prev} disabled={index === 0}>
        {" "}
        Previous
      </button>
      <button
        data-testid="button-next"
        onClick={next}
        disabled={index === slides.length - 1}
      >
        {" "}
        Next
      </button>
    </>
  );
};

export default App;
