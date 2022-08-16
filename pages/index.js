import {useRouter} from "next/router";


function Home() {
    const router = useRouter()
    function pushtologin(){
        router.push("/login")

    }
    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={pushtologin}>Ir para login</button>
        </div>
    );
}

export default Home;
