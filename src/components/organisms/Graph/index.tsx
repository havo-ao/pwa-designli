import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { ComponentContainer } from "../../molecules/ComponentContainer";
import { SelectedStockValues, StocksData } from "../../../Types/global.types";
import { useCustomTheme } from "../../../hooks/useThemeContext";
import { useEffect, useRef, useState } from "react";

interface GraphParams {
  selectedStockValues: SelectedStockValues;
  stocksData: StocksData;
}

const Graph: React.FC<GraphParams> = ({
  selectedStockValues,
  stocksData,
}: GraphParams) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState<number>(800);
  const [chartHeight, setChartHeight] = useState<number>(500);

  const { mode } = useCustomTheme();

  const filteredStockData = stocksData.filter((stock) =>
    selectedStockValues.includes(stock.symbol)
  );

  const stockChartData = filteredStockData.map((stock) => ({
    name: stock.symbol,
    value: stock.value,
  }));

  const themeModeClass = mode;

  const dollarValue = 150;

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        const { width, height } =
          chartContainerRef.current.getBoundingClientRect();
        let widthToResize = 0;
        if (selectedStockValues.length < 8) {
          widthToResize = width * (1 / 8) * selectedStockValues.length;
        } else {
          widthToResize = width;
        }
        setChartWidth(widthToResize);
        setChartHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedStockValues]);

  return (
    <ComponentContainer className={`graph ${themeModeClass}`}>
      <h2>Stock Comparison Chart</h2>
      <div
        ref={chartContainerRef}
        style={{
          width: "90%",
          height: "100%",
        }}
      >
        <BarChart
          width={chartWidth}
          height={chartHeight}
          className="chart"
          data={stockChartData}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={dollarValue} stroke="red" strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </ComponentContainer>
  );
};

export default Graph;
