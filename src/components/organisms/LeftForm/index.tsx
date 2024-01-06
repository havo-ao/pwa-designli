import React from "react";
import { SelectChangeEvent } from "@mui/material";

import "./styles.scss";
import { ComponentContainer } from "../../molecules/ComponentContainer";
import StockSelect from "../../molecules/InputSelect";
import PriceTextField from "../../atoms/TextField";

const LeftForm: React.FC = () => {
  const [selectedStock, setSelectedStock] = React.useState("");
  const [alertPrice, setAlertPrice] = React.useState("");

  const handleStockChange = (event: SelectChangeEvent<string>) => {
    setSelectedStock(event.target.value);
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

  return (
    <ComponentContainer className="left-form">
      <StockSelect
        className="stock-select"
        label="Select Stock"
        options={stocks}
        value={selectedStock}
        onChange={handleStockChange}
      />
      <PriceTextField
        fullWidth
        id="alert-price"
        label="Set Alert Price"
        value={alertPrice}
        onChange={handleAlertPriceChange}
      />
    </ComponentContainer>
  );
};

export default LeftForm;
