const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const authRouter = require("./routes/auth.route");
const kelasRouter = require("./routes/kelas.route");
const mataPelajaranRouter = require("./routes/mata_pelajaran.route");
const babRouter = require("./routes/bab.route");
const subBabRouter = require("./routes/sub_bab");
const materiRouter = require("./routes/materi.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/kelas", kelasRouter);
app.use("/mata_pelajaran", mataPelajaranRouter);
app.use("/bab", babRouter);
app.use("/sub_bab", subBabRouter);
app.use("/material", materiRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
