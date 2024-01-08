import { useState } from "react";
import { Grid, SelectChangeEvent } from "@mui/material";

import { ComponentContainer } from "../../molecules/ComponentContainer";
import Graph from "../../organisms/Graph";
import LeftForm from "../../organisms/LeftForm";
import TopCards from "../../organisms/TopCards";
import { useCustomTheme } from "../../../hooks/useThemeContext";
import SwitchDarkMode from "../../molecules/SwitchDarkMode";
import React from "react";

const Home = () => {
  const [selectedStocks, setSelectedStocks] = React.useState<string[]>([]);
  const [alertPrice, setAlertPrice] = useState("");

  const handleStocksChange = (event: SelectChangeEvent<string[]>): void => {
    if (Array.isArray(event.target.value)) {
      setSelectedStocks(event.target.value);
    } else if (typeof event.target.value === "string") {
      setSelectedStocks([event.target.value]);
    } else {
      setSelectedStocks([]);
    }
  };

  const handleAlertPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAlertPrice(event.target.value);
  };

  const stocks = [
    { value: "AAPL", name: "Apple Inc." },
    { value: "GOOGL", name: "Google Inc." },
  ];

  const { mode, toggleMode } = useCustomTheme();

  const handleToggleMode = () => {
    toggleMode();
  };

  return (
    <ComponentContainer className="home">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <LeftForm
            stocks={stocks}
            selectedStocks={selectedStocks}
            handleStocksChange={handleStocksChange}
            alertPrice={alertPrice}
            handleAlertPriceChange={handleAlertPriceChange}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Graph />
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
