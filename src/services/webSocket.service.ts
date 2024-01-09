import { FINNHUB_TOKEN } from "../config/finnhub.config";
import { stocks } from "../config/stocks.config";

interface WebSocketServiceOptions {
  onMessage: (data: any) => void;
}

const WebSocketService = {
  initializeWebSocket({ onMessage }: WebSocketServiceOptions) {
    const socket: any = new WebSocket(
      `wss://ws.finnhub.io?token=${FINNHUB_TOKEN}`
    );

    socket.onopen = () => {
      console.log("WebSocket connected");
      stocks.forEach((stock) => {
        socket?.send(
          JSON.stringify({ type: "subscribe", symbol: stock.value })
        );
      });
    };

    socket.onmessage = (event: any) => {
      const realTimeResponse = JSON.parse(event.data);
      const data = realTimeResponse.data;

      console.log("RealTime Response: ", realTimeResponse);

      if (data?.length && data !== undefined) {
        const updatedData = data.map((stock: { s: number; p: number }) => ({
          symbol: stock.s,
          value: stock.p,
        }));

        onMessage(updatedData);
      }
    };

    socket.onerror = (error: any) => {
      console.error("WebSocket error:", error);
    };
  },
};

export default WebSocketService;
