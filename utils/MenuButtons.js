import { SignOut } from "./ManageLoginDB";
import { createStoryDB } from "./ManageStoryDB";

//Manage the menu Buttons from left side bar
const ProfileBtn = (router) => {
    return {
        name: "Profile",
        text: "Profile",
        method: () => {
            router.push("/profile");
        },
    };
};
const LogoutBtn = {
    name: "Logout",
    text: "Logout",
    method: SignOut,
};
const LoginBtn = (router) => {
    return {
        name: "Login",
        text: "Login/Create",
        method: () => {
            router.push("/login");
        },
    };
};
const HomeBtn = (router) => {
    return {
        name: "Home",
        text: "Home",
        method: () => {
            router.push("/");
        },
    };
};
//recieves data from useSession
const CreateStory = (router, name) => {
    return {
        name: "Create",
        text: "Create Story",
        method: async () => {
            await createStoryDB(name);
            router.reload();
        },
    };
};
export { ProfileBtn, HomeBtn, LoginBtn, LogoutBtn, CreateStory };
