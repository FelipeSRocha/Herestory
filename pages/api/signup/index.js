import Model from "../../../models/user";
import mongoose from "mongoose";

export default async function handler(req, res) {
    mongoose.connect(process.env.MONGODB_URL);
    const user = await Model.find({ user: req.body.user });

    if (user.length > 0) {
        // "existe"
        res.status(200).json({ signin: false });
    } else {
        // "Nao existe"
        try {
            const user = await Model.create(req.body);
            res.status(200).json({ signin: true });

        } catch (err) {
            res.status(400).json({ status: "Not able to create a new User!" });
        }
    }
}
