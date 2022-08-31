import { SignOut } from "./ManageLoginDB";
import { createStoryDB , saveStoryDB} from "./ManageStoryDB";

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
const CreateStoryBtn = (router, name) => {
    return {
        name: "Create",
        text: "Create Story",
        method: async () => {
            await createStoryDB(name);
            router.reload();
        },
    };
};
const ReturnToBtn = (router, returnTo) => {
    return {
        name: "Return",
        text: `Return to ${returnTo}`,
        method: async () => {
            router.push(`/${returnTo}`);
        },
    };
};
const SaveBtn = (method) => {
    return {
        name: "Save",
        text: "Save",
        method: method,
    };
};
const PublishBtn = (method) => {
    return {
        name: "Publish",
        text: "Publish",
        method: method,
    };
};
const unPublishBtn = (method) => {
    return {
        name: "Unpublish",
        text: "Unpublish",
        method: method,
    };
};
export {
    ProfileBtn,
    HomeBtn,
    LoginBtn,
    LogoutBtn,
    CreateStoryBtn,
    ReturnToBtn,
    SaveBtn,
    PublishBtn,
    unPublishBtn,
};
