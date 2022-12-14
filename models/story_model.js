import mongoose from "mongoose";



let StorySchema = new mongoose.Schema({
    
    user: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: "",
    },
    story_id:{
        type: String,
        require: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    },
    published: {
        type: Boolean,
        default: false,
    },
    publishedAt:{
        type: Date,
        default: null,
    }
});
module.exports = mongoose.models.story || mongoose.model("story", StorySchema);
