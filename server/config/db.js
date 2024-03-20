const mongoose = require("mongoose")
mongoose.set('strictQuery', false);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch(err) {
        console.log("Mongo DB NOT Connected: ")
        process.exit(1)
    }
}

module.exports = connectDB