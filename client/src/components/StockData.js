import React from 'react';

const StockData = ({ userStockData, buys, sells, svgJSX }) => {
  let stockDataJSX = [];
  if (svgJSX.length > 0) {
    stockDataJSX.push(<p>You have {userStockData.currentStocks} stocks plus cash worth a total of ${(parseFloat(userStockData.currentStockValue) + parseFloat(userStockData.bank)).toFixed(2)}</p>);
    stockDataJSX.push(<p>You have {userStockData.currentBuys} {buys} and {userStockData.currentSells} {sells} left</p>);
  }
  return (
    <div>
      {stockDataJSX}
    </div>
  )
}


export default StockData
