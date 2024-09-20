import express from "express";
import axios from "axios";

const router = express.Router();

const options = {
  method: "GET",
  url: "https://piano-chords.p.rapidapi.com/chords",
  headers: {
    "x-rapidapi-key": "3762c645c7msh9e17cac528ac13ap1ba0b2jsn93fcefc70e21",
    "x-rapidapi-host": "piano-chords.p.rapidapi.com",
  },
};

router.get("/", async (_req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching chords:", error.message);
    res.status(500).send("Error fetching chords");
  }
});

export default router;
