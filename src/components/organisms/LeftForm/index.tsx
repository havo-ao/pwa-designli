import React, { ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

import "./styles.scss";
import { ComponentContainer } from "../../molecules/ComponentContainer";
import StockSelect from "../../molecules/InputSelect";
import PriceTextField from "../../atoms/TextField";

type LeftFormProps = {
  stocks: { value: string; name: string }[];
  selectedStocks: string[];
  handleStocksChange: (
    event: SelectChangeEvent<string[]>,
    child: ReactNode
  ) => void;
  alertPrice: string;
  handleAlertPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LeftForm: React.FC<LeftFormProps> = ({
  stocks,
  selectedStocks,
  handleStocksChange,
  alertPrice,
  handleAlertPriceChange,
}) => {
  return (
    <ComponentContainer className="left-form">
      <StockSelect
        className="stock-select"
        label="Select Stock"
        options={stocks}
        value={selectedStocks}
        onChange={handleStocksChange}
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
