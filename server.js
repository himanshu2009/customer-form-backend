
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;


app.use(express.json());


const CustomerDataRoutes = require("./routes/submitData")
//mount the todo api routes

app.use("/api/v1", CustomerDataRoutes)

// start server

app.listen(PORT, () => {
    console.log(`app is running successfully at ${PORT}`);
})

//connect to the database

const dbConnect = require("./config/database")
// call to dbconnect
dbConnect();



// app.get("/", (req, res) => {
//     res.send(`<h1>This is HOMEPAGE BABY</h1>`)

// })




