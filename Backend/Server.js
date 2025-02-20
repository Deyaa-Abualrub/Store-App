const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 9500;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://67b71c172bddacfb270db5e3.mockapi.io/Products"
    );
    return res.json(response.data);
  } catch (error) {
    res.status(200).json({ error: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
