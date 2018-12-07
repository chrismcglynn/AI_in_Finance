import React from 'react';

const Podium = ({ podium, currentData, data, gettingNewStock }) => {

  var podiumJSX = [];
  podiumJSX.push(<br />);
  if (
    currentData.length > 0 &&
    data.length === currentData.length &&
    !gettingNewStock
  ) {
    podiumJSX.push(
      <div className="podium">
        <p>
          <span style={{ "font-weight": "bold" }}>1st</span> {podium[0].name}: $
          {podium[0].stockValue.toFixed(2)}
        </p>
        <p>
          <span style={{ "font-weight": "bold" }}>2nd</span> {podium[1].name}: $
          {podium[1].stockValue.toFixed(2)}
        </p>
        <p>
          <span style={{ "font-weight": "bold" }}>3rd</span> {podium[2].name}: $
          {podium[2].stockValue.toFixed(2)}
        </p>
      </div>
    );
  }

  return <div className="podium-container">{podiumJSX}</div>;
};

export default Podium;
