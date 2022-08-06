const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URL;

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            const body = req.body;
            const client = new MongoClient(uri);
            async function run() {
                try {
                    await client.connect();
                    console.log("connected");
                    const db = client.db("HerestoryDB");
                    const collUser = db.collection("user");
                    const userExist = collUser.find({
                        user: body.user,
                    }).countDocuments;
                    console.log(userExist);
                    //   await signUp(collUser, body);

                    //     if (!existingUser){
                    //         console.log("Criando novo Usuario")
                    //         signUp(collUser, body)

                    //     }else{
                    //         console.log("Usuário já existe")
                    //         res.json(null)
                    //     }
                } finally {
                    await client.close();
                }
            }
            run().catch(console.dir);
            // Update or create data in your database

            break;
        default:
            console.log("?");
    }
}
async function signUp(collUser, User) {
    await collUser.insertMany([
        { user: User.user, data: { password: User.password } },
    ]);
    res.status(200).json({
        text: `User ${User.user} e senha ${User.password} criado com sucesso`,
    });
}
