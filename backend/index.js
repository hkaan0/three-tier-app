const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Merhaba, bu üç katmanlı uygulamanın backend'idir!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend ${PORT} portunda çalışıyor`);
});
