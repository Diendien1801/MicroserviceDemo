const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", userId: 1 },
  { id: 2, name: "Phone", userId: 2 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:userId", (req, res) => {
  const userProducts = products.filter((p) => p.userId == req.params.userId);
  res.json(userProducts);
});

app.listen(3002, () => console.log("Product Service listening on port 3002"));
