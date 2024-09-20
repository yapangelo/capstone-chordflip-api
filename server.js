import express from "express";
import cors from "cors";
import chordsRoute from "./routes/chords.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use("/chords", chordsRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
