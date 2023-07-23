import React, { useEffect, useState } from 'react';

const AnimateText = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const text = 'A Front-End Developer React.js'; // Define the 'text' variable here

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters(prevVisibleLetters => {
        if (prevVisibleLetters === text.length) {
          clearInterval(interval);
          return prevVisibleLetters;
        }
        return prevVisibleLetters + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="animate-container">
      <span className="animate-text">
        {visibleLetters > 0 ? (
          text.split('').slice(0, visibleLetters).map((letter, index) => (
            <span key={index} className="animate-letter">{letter}</span>
          ))
        ) : null}
      </span>
    </div>
  );
};

export default AnimateText;
