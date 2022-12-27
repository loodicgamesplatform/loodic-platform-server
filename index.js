import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js"
dotenv.config();

const app = express();
app.use(express.json())
app.use("/users", userRouter);

app.listen(process.env.PORT , () => {
    console.log(`${process.env.PORT}` + ". port dinliyor")
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,       
    }).then(() => console.log("database connected")).catch((err)=> console.log(err))
});

