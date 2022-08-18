import {useRouter} from "next/router";
import MenuBar from "../Components/MenuBar"

function Home() {
    const router = useRouter()
    function pushtologin(){
        router.push("/login")

    }
    return (
        <div>
            <MenuBar/>
        </div>
    );
}

export default Home;
