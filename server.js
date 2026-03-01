const express = require("express");
const axios = require("axios");
const app = express();

app.get("/price", async (req, res) => {
  try {
    const symbol = req.query.symbol || "BTCUSDT";

    const response = await axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    );

    res.json(response.data);
  } catch (err) {
    res.json({ error: "Invalid Symbol" });
  }
});

app.listen(3000, () => {
  console.log("Server running");
});