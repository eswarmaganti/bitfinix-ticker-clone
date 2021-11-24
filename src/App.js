import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Ticker from "./components/Ticker";

const App = () => {
  const [state, setState] = useState({
    hight: "",
    low: "",
    volume: "",
    lastPrice: "",
    dailyChange: "",
    dailyChangeRelative: "",
    loading: true,
  });

  const getTickerData = () => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: "tBTCUSD",
    });

    ws.addEventListener("message", ({ data }) => {
      // console.log(data.data);
      const tickerData = JSON.parse(data);
      if (typeof tickerData[1] === "object") {
        const dataArray = tickerData[1];

        setState({
          high: dataArray[8].toLocaleString(),
          low: dataArray[9].toLocaleString(),
          volume: Math.round(dataArray[7] * dataArray[0]).toLocaleString(),
          lastPrice: Math.round(dataArray[6]).toLocaleString(),
          dailyChange: dataArray[4].toFixed(2),
          dailyChangeRelative:
            Math.round((dataArray[5] * 100 + Number.EPSILON) * 100) / 100,
          loading: false,
        });
      }
    });

    ws.addEventListener("open", () => {
      console.log("Connected");
      ws.send(msg);
    });

    ws.addEventListener("close", () => {
      console.log("Connection Closed");
    });
  };
  // console.log(state);
  useEffect(() => {
    getTickerData();
  }, []);

  return (
    <section className="flex items-center justify-center bg-gray-800 h-screen text-white">
      {state.loading ? <Loader /> : <Ticker state={state} />}
    </section>
  );
};

export default App;
