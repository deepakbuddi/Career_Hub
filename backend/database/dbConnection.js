import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(() => {
        console.log("Connected to MongoDB Successfully");
    }).catch((err) => {
        console.log(`Some error has be occured while connecting to MongoDB: ${err}`);
    })
};
