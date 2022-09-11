import * as S from "./style"

const MiniPage = ({ data, router }) => {
    const goTo = (name, story_id) => {
        router.push("/u/" + name+ '/'+ story_id);
    };
    return (
        <>
            <S.Container>
                {data.map((story) => {
                    const date = new Date(story.publishedAt);
                    const paragraph = story.text.substr(0, 500);
                    const arrayOfText = paragraph.split("\n");

                    const day = date.getDate();
                    const month = date.getMonth();
                    const monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ];
                    return (
                        <S.Box
                            key={story.story_id}
                            onClick={() => {
                                goTo(story.user,story.story_id);
                            }}
                        >
                            <S.Info>
                                <p>{story.user}</p>
                                <p>{day + " - " + monthNames[month]}</p>
                            </S.Info>
                            <S.Title>
                                <h1>{story.title.substr(0, 50)}</h1>
                            </S.Title>
                            <S.Text>
                                {arrayOfText.map((element, index) => {
                                    return element == "" ? (
                                        <span key={index} />
                                    ) : (
                                        <p key={index}>{element}</p>
                                    );
                                })}
                            </S.Text>
                        </S.Box>
                    );
                })}
            </S.Container>
        </>
    );
};
export default MiniPage;
