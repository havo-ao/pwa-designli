import React, { ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

import "./styles.scss";
import { ComponentContainer } from "../../molecules/ComponentContainer";
import StockSelect from "../../molecules/InputSelect";
import PriceTextField from "../../atoms/TextField";
import { SelectedStockValues, Stock } from "../../../Types/global.types";

type LeftFormProps = {
  stocks: Stock[];
  selectedStockValues: SelectedStockValues;
  handleStocksChange: (
    event: SelectChangeEvent<string[]>,
    child: ReactNode
  ) => void;
  alertPrice: number;
  handleAlertPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LeftForm: React.FC<LeftFormProps> = ({
  stocks,
  selectedStockValues,
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
        value={selectedStockValues}
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
