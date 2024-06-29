import mongoose from "mongoose";

function mongooseConnection(){
    try {
        mongoose.connect(
            process.env.DB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log("Mongoose is connected"),
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));
}

export default mongooseConnection;