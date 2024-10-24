import mongoose from "mongoose";

const MONGO_DB_URI = "mongodb+srv://voltantroyer2:2m8hzIp97Kxu34D5@cluster0.avwoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const MONGO_DB_NAME = "saver"



async function Connect() {

    try {

        if (!MONGO_DB_URI || !MONGO_DB_NAME) {
            throw new Error("MONGO_DB_URI and MONGO_DB_NAME must be defined")
        }

        await mongoose.connect(MONGO_DB_URI,
            { dbName: MONGO_DB_NAME }
        );

    } catch (error) {

        console.log("Err Connecting to Database", error);

    }

}

export default Connect;