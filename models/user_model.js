import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user:{
            type: String,
            unique: true,
            require: true,
        },
        password:{
            type: String,
            select: false,
            require: true,
        },
        userToken:{
            type: String,
            require: true,
            unique: true,
            select: false,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    }
)
module.exports =  mongoose.models.User || mongoose.model("User", userSchema);
