import Model from "../../../models/user";
import mongoose from "mongoose";

export default async function handler(req, res) {
    mongoose.connect(process.env.MONGODB_URL);
    const user = await Model.find({ user: req.body.user, password: req.body.password });

    if (user.length > 0) {
        // "existe"
        res.status(200).json({ login: true });
    } else {
        // "Nao existe"
        res.status(200).json({ login: false });
    }
}