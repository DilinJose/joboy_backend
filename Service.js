const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(cors());

// const data = new URLSearchParams();
// data.append("city", "1");
// data.append("lang", "1");

const data = { city: "1", lang: "1" };
const config = {
  headers: {
    Authorization: "Basic YWRtaW46MTIzNA==",
    session: "S04CGCCS",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: "ci_session=4hpvloqnidi9da65rsnpc649s1d8tnk8",
  },
};

app.get("/api/service/list", async (req, res) => {
  try {
    const response = await axios.post(
      "https://beta.joboy.in/api/service/list",
      data,
      config
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
