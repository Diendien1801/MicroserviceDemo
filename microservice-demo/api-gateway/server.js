const express = require("express");
const axios = require("axios");
const app = express();

const USER_SERVICE = "http://localhost:3001";
const PRODUCT_SERVICE = "http://localhost:3002";

app.get("/user/:id", async (req, res) => {
  try {
    const user = await axios.get(`${USER_SERVICE}/users/${req.params.id}`);
    const products = await axios.get(
      `${PRODUCT_SERVICE}/products/${req.params.id}`
    );
    res.json({
      user: user.data,
      products: products.data,
    });
  } catch (err) {
    res.status(500).send("Something went wrong: " + err.message);
  }
});

app.listen(3000, () => console.log("API Gateway listening on port 3000"));
