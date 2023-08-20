const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://usama-farooq:2WzwLzPrWsAtX2TG@cluster0.fdfk6b0.mongodb.net/sample_mflix?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
