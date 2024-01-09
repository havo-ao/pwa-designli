import { Stock, StockDataFetched } from "../Types/global.types";
import { FINNHUB_TOKEN } from "../config/finnhub.config";

const StockService = {
  async fetchStocksData(stocks: Stock[]): Promise<StockDataFetched[] | []> {
    try {
      const promises = stocks.map(async (stock) => {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${stock.value}&token=${FINNHUB_TOKEN}`
        );
        const data = await response.json();

        const percentageChange = parseFloat(data?.dp?.toFixed(2));

        const stockData: StockDataFetched = {
          symbol: stock.value,
          name: stock.name,
          value: data.c,
          change: percentageChange,
          timestamp: data.t,
          previousClosePrice: data.pc,
        };

        return stockData;
      });

      return await Promise.all(promises);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return [];
    }
  },
};

export default StockService;
