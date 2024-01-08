import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { ComponentContainer } from "../../molecules/ComponentContainer";
import "./styles.scss";
import { useCustomTheme } from "../../../hooks/useThemeContext";

const Graph: React.FC = () => {
  const { mode } = useCustomTheme();

  const stockChartData = [
    { name: "01", value: 100 },
    { name: "02", value: 150 },
    { name: "03", value: 200 },
  ];

  const themeModeClass = mode;

  return (
    <ComponentContainer className={`graph ${themeModeClass}`}>
      <h2>Stock Value Chart</h2>
      <LineChart width={500} height={300} data={stockChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ComponentContainer>
  );
};

export default Graph;
