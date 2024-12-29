import express from "express";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.setDefaultEncoding("server is rady");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
