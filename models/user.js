import mongoose from "mongoose";
const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        select: false,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    stories: StorySchema,
});

module.exports =
    mongoose.models.UserList || mongoose.model("UserList", UserSchema);
