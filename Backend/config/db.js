import mongoose from "mongoose";

export const connectDB =async() => {
    await mongoose.connect('mongodb+srv://rajankumar:rajankumar@cluster0.jwnmgmr.mongodb.net/food-delivery').then(() => console.log("DB Connected"))
}