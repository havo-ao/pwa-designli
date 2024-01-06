import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import "./styles.scss";
import { ComponentContainer } from "../../molecules/ComponentContainer";

const TopCards: React.FC = () => {
  const stockData = [
    { name: "AAPL", value: 150.25, change: 1.5 },
    { name: "GOOGL", value: 2750.75, change: -0.7 },
  ];

  return (
    <ComponentContainer className="top-cards">
      {stockData.map((stock, index) => (
        <Card className="stock-card" key={index}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {stock.name}
            </Typography>
            <Typography variant="body1">Value: ${stock.value}</Typography>
            <Typography variant="body1">
              Change:{" "}
              {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </ComponentContainer>
  );
};

export default TopCards;
