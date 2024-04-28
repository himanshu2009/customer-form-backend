const mongoose = require("mongoose")

//this loads out env properties into the process object
require("dotenv").config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() =>
        console.log("DB ka  connection is successful")
    ).catch((error) => {
        console.log("Issue in Db connection")
        console.log(error.message);
        //iska matlab
        process.exit(1);
    })

}

module.exports = dbConnect;