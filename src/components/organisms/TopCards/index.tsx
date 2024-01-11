import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import "./styles.scss";
import { ComponentContainer } from "../../molecules/ComponentContainer";
import { StocksData } from "../../../Types/global.types";

export interface TopCardParams {
  stocksData: StocksData;
}

const TopCards: React.FC<TopCardParams> = ({ stocksData }: TopCardParams) => {
  return (
    <ComponentContainer className="top-cards">
      <div className="top-cards-container">
        {stocksData.map((stock, index) => (
          <Card className="stock-card" key={index}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {stock.name}
              </Typography>
              <Typography variant="body1">Value: ${stock.value}</Typography>
              <Typography
                className={stock.change < 0 ? `below` : `above`}
                variant="body1"
              >
                {`Change: ${
                  stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`
                }`}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default TopCards;
