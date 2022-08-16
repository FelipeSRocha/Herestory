import mongoose from "mongoose";

let StorySchema = new mongoose.Schema({
    user: {
        type: String,
        require: true,
    },
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    published: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.models.story || mongoose.model("story", StorySchema);
