export interface Stock {
  value: string;
  name: string;
}

export interface StockData {
  symbol: string;
  name: string;
  value: number;
  change: number;
}

export interface StockDataFetched {
  symbol: string;
  name: string;
  value: number;
  change: number;
  timestamp: number;
  previousClosePrice: number;
}

export type Stocks = Stock[];

export type StocksData = StockData[];

export type StockValue = string;

export type SelectedStockValues = StockValue[];
