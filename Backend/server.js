const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require('./Routes/auth');
const appointmentRoutes = require('./Routes/appointment')

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); 
app.use('/', authRoutes);
app.use('/',appointmentRoutes);

mongoose.connect('mongodb://localhost:27017/Doctor', {

});

const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () => console.log("MongoDB Database Connected"));

const Port = 5000;
app.listen(Port, () => console.log(`Server connected on port ${Port}`));
