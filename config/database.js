const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Database connect failed.");
      console.log(error);
      process.exit(1);
    });
};
