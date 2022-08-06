import connect from "../../../config/mongodb"
import UserSchema from '../../../models/user'

connect()

export default async function handler(req,res){
    
    try{
        const user = await UserSchema.create(req.body)
        res.status(200).json({code: "User created!"})
        if(!user){
            return res.json({code: "User not created"})
        }
    } catch (err){
        res.status(400).json({status:"Not able to create a new User!"})
    }
}

