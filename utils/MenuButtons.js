import { SignOut } from "./ManageLoginDB";
import { createStoryDB, saveStoryDB } from "./ManageStoryDB";
import {
    FaSignOutAlt,
    FaHome,
    FaUserAlt,
    FaPlusSquare,
    FaSave,
    FaShareAlt,
    FaTimes,
    FaEdit,
    FaEraser,
    FaCheckCircle,
    FaReply
} from "react-icons/fa";
import userpage from "../pages/u/[username]";


//Manage the menu Buttons from left side bar
const ProfileBtn = (router) => {
    return {
        name: "Profile",
        text: "Profile",
        method: () => {
            router.push("/profile");
        },
        icon: <FaUserAlt />,
    };
};

const LogoutBtn = {
    name: "Logout",
    text: "Logout",
    method: SignOut,
    icon: <FaSignOutAlt />,
};
const LoginBtn = (router) => {
    return {
        name: "Login",
        text: "Login/Create",
        method: () => {
            router.push("/login");
        },
        icon: <FaSignOutAlt />,
    };
};
const HomeBtn = (router) => {
    return {
        name: "Home",
        text: "Home",
        method: () => {
            router.push("/");
        },
        icon: <FaHome />,
    };
};
//recieves data from useSession
const CreateStoryBtn = (router, name) => {
    return {
        name: "Create",
        text: "Create New Story",
        method: async () => {
            await createStoryDB(name);
            router.reload();
        },
        icon: <FaPlusSquare />,
    };
};

const SaveBtn = (method) => {
    return {
        name: "Save",
        text: "Save",
        method: method,
        icon: <FaSave />,
    };
};
const PublishBtn = (method) => {
    return {
        name: "Publish",
        text: "Publish",
        method: method,
        icon: <FaShareAlt />,
    };
};
const unPublishBtn = (method) => {
    return {
        name: "Unpublish",
        text: "Unpublish",
        method: method,
        icon: <FaTimes />,
    };
};
const EditBtn = (method) =>{
    return{
        name: "Edit",
        text: "Edit",
        method: method,
        icon: <FaEdit />,
    }
}
const readBtn = (method) =>{
    return{
        name: "Save and Finish",
        text: "Save and Finish",
        method: method,
        icon: <FaCheckCircle />,
    }
}
const deleteBtn = (method) =>{
    return{
        name: "Delete",
        text: "Delete",
        method: method,
        icon: <FaEraser />,
    }
}
const ReturnBtn = (router, userPage) =>{
    return{
        name: `Return to ${userPage}'s Page`,
        text: `Return to ${userPage}'s Page`,
        method: () => {
            router.push(`/u/${userPage}`);
        },
        icon: <FaReply />,
    }
}
export {
    ProfileBtn,
    HomeBtn,
    LoginBtn,
    LogoutBtn,
    CreateStoryBtn,
    SaveBtn,
    PublishBtn,
    unPublishBtn,
    EditBtn,
    deleteBtn,
    readBtn,
    ReturnBtn
};
