import { signOut, signIn } from "next-auth/react";

//Manage the log events

const Login = async (e,username, password) =>{
    e.preventDefault();

    const res = await signIn("credentials", {
        user: username,
        password: password,
        redirect: false,
    });
    if(res.error){
        alert("Invalid user or password")
    }
}

const SignUp = async (e, username, password) =>{
    console.log(e, username, password)
    if (!username) {
        alert("Username cannot be empty");
        return;
    }
    if (password.length < 8) {
        alert("Password must have a minimum of 8 characters ");
        return;
    }
    if (username && password.length > 7) {
        // call function to sign in
        fetch("./api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: username,
                password: password,
            }),
        }).then((res) => {
            if (res.status == 200) {
                //if a positive response
                res.json().then((res) => {
                    if (res.signin) {
                        //if server created a user
                        alert("User Created!");
                        Login(e, username, password)
                    } else {
                        //if user already exists
                        alert("Username already exist, try another one!");
                    }
                });
            } else {
                alert("Not able to create a new User!");
            }
        });
    }
}

const SignOut = () =>{
    signOut()
}

export {Login, SignUp, SignOut} 