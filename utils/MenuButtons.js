import { SignOut } from "./ManageLoginDB";
import { createStoryDB , saveStoryDB} from "./ManageStoryDB";
import { FaSignOutAlt, FaHome, FaUserAlt } from "react-icons/fa";

//Manage the menu Buttons from left side bar
const ProfileBtn = (router) => {
    return {
        name: "Profile",
        text: "Profile",
        method: () => {
            router.push("/profile");
        },
        icon: <FaUserAlt/>
    };
};

const LogoutBtn = {
    name: "Logout",
    text: "Logout",
    method: SignOut,
    icon: <FaSignOutAlt/>
};
const LoginBtn = (router) => {
    return {
        name: "Login",
        text: "Login/Create",
        method: () => {
            router.push("/login");
        },
        icon: <FaSignOutAlt/>
    };
};
const HomeBtn = (router) => {
    return {
        name: "Home",
        text: "Home",
        method: () => {
            router.push("/");
        },
        icon: <FaHome/>
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
        icon: <FaSignOutAlt/>
    };
};
const ReturnToBtn = (router, returnTo) => {
    return {
        name: "Return",
        text: `Return to ${returnTo}`,
        method: async () => {
            router.push(`/${returnTo}`);
        },
        icon: <FaSignOutAlt/>
    };
};
const SaveBtn = (method) => {
    return {
        name: "Save",
        text: "Save",
        method: method,
        icon: <FaSignOutAlt/>
    };
};
const PublishBtn = (method) => {
    return {
        name: "Publish",
        text: "Publish",
        method: method,
        icon: <FaSignOutAlt/>
    };
};
const unPublishBtn = (method) => {
    return {
        name: "Unpublish",
        text: "Unpublish",
        method: method,
        icon: <FaSignOutAlt/>
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
