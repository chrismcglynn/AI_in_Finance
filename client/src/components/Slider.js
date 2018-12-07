import React from 'react';

const Slider = ({ showStartScreen, sliderVal, handleSlider }) => {

  let slider;
  if (!showStartScreen) {
    slider = (
      <input
        type="range"
        min="0"
        max="100"
        value={sliderVal}
        step="5"
        className="slider"
        id="myRange"
        onChange={event => handleSlider(event)}
      />
    );
  }

  return <div id="slidecontainer">{slider}</div>;
};

export default Slider;
