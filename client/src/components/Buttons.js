import React from 'react';

const Buttons = ({ svgJSX, userStockData, currentData, data, handleBuy, handleSell }) => {

  let buyBtnStyle = {};
  let sellBtnStyle = {};
  if (document.getElementById('buy-btn') && currentData.length >= 1) {
    document.getElementById('buy-btn').classList.add('btn-active');
    document.getElementById('sell-btn').classList.add('btn-active');
    if (userStockData.currentBuys === 0) {
      document.getElementById('buy-btn').classList.toggle('btn-active');
      buyBtnStyle.background = 'rgb(142, 142, 142)';
    }
    else {
      buyBtnStyle.background = 'rgb(39, 144, 214)';
    }
    if (userStockData.currentSells === 0) {
      document.getElementById('sell-btn').classList.toggle('btn-active');
      sellBtnStyle.background = 'rgb(142, 142, 142)';
    }
    else {
      sellBtnStyle.background = 'rgb(175, 3, 3)';
    }
  }

  let buttonsJSX = <div></div>;
  if (svgJSX.length > 0) {
    if (currentData.length === 0 || currentData.length  !== data.length) {
      buttonsJSX = (
        <div>
          <button onClick={() => {handleBuy()}} id="buy-btn" className="btn" style={buyBtnStyle} >Buy</button>
          <button onClick={() => {handleSell()}} id="sell-btn" className="btn" style={sellBtnStyle} >Sell</button>
        </div>
      );
    }
  }

  return(
    buttonsJSX
  );
}

export default Buttons;
