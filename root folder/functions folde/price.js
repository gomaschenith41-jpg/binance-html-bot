const axios = require("axios");

exports.handler = async function(event, context) {
  try {
    const symbol = event.queryStringParameters.symbol || "BTCUSDT";
    const response = await axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid Symbol" })
    };
  }
};
