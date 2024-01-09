/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { Grid, SelectChangeEvent } from "@mui/material";

import { ComponentContainer } from "../../molecules/ComponentContainer";
import Graph from "../../organisms/Graph";
import LeftForm from "../../organisms/LeftForm";
import TopCards from "../../organisms/TopCards";
import { useCustomTheme } from "../../../hooks/useThemeContext";
import SwitchDarkMode from "../../molecules/SwitchDarkMode";
import StockService from "../../../services/api.service";
import WebSocketService from "../../../services/webSocket.service";
import { stocks } from "../../../config/stocks.config";
import {
  StockData,
  StockDataFetched,
  StocksData,
} from "../../../Types/global.types";

const Home = () => {
  const [stocksData, setStocksData] = useState<StocksData>([]);

  const [selectedStockValues, setSelectedStockValues] = React.useState<
    string[]
  >([]);
  const [alertPrice, setAlertPrice] = useState(0);

  const handleStocksChange = (event: SelectChangeEvent<string[]>): void => {
    if (Array.isArray(event.target.value)) {
      setSelectedStockValues(event.target.value);
    } else if (typeof event.target.value === "string") {
      setSelectedStockValues([event.target.value]);
    } else {
      setSelectedStockValues([]);
    }
  };

  const handleAlertPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valueAsString = event.target.value;
    setAlertPrice(parseFloat(valueAsString));
  };

  const { mode, toggleMode } = useCustomTheme();

  const handleToggleMode = () => {
    toggleMode();
  };

  useEffect(() => {
    StockService.fetchStocksData(stocks).then((data) => {
      if (data) {
        localStorage.clear();
        setStocksData(data);
        localStorage.setItem("stocksData", JSON.stringify(data));
      }
    });
  }, []);

  useEffect(() => {
    WebSocketService.initializeWebSocket({
      onMessage: (data) => {
        if (data && data.length > 0) {
          const storedStocksData = localStorage.getItem("stocksData");

          if (storedStocksData) {
            const parsedStoredStocksData: StockDataFetched[] =
              JSON.parse(storedStocksData);

            const updatedStocksData = parsedStoredStocksData.map((stock) => {
              const matchingData = data.find(
                (updatedStock: StockData) =>
                  updatedStock.symbol === stock.symbol
              );

              if (matchingData) {
                const previousClosePrice = stock.previousClosePrice;
                const currentprice = matchingData.value;

                const priceDifference = currentprice - previousClosePrice;

                const percentageChange = parseFloat(
                  ((priceDifference / previousClosePrice) * 100).toFixed(2)
                );

                return {
                  ...stock,
                  value: matchingData.value,
                  change: percentageChange || 0,
                };
              }

              return stock;
            });

            setStocksData(updatedStocksData);
            localStorage.setItem(
              "stocksData",
              JSON.stringify(updatedStocksData)
            );
          }
        }
      },
    });
  }, []);

  return (
    <ComponentContainer className="home">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopCards stocksData={stocksData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LeftForm
            stocks={stocks}
            selectedStockValues={selectedStockValues}
            handleStocksChange={handleStocksChange}
            alertPrice={alertPrice}
            handleAlertPriceChange={handleAlertPriceChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Graph
            selectedStockValues={selectedStockValues}
            stocksData={stocksData}
          />
        </Grid>
      </Grid>
      <SwitchDarkMode
        mode={mode}
        checked={mode === "dark"}
        onChange={handleToggleMode}
      />
    </ComponentContainer>
  );
};

export default Home;
