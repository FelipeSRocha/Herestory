import { useRouter } from "next/router";
import NewStory from "../../Components/NewStory";

export default function userPage() {
    const router = useRouter();
    const userpage = router.query.user;

    return (
        <>
            <h1>Esta é a pagina de {userpage}</h1>
            <NewStory />
        </>
    );
}
