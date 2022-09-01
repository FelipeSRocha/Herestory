import styled from "styled-components";

const ExplorerPreview = ({ data, router }) => {
    const goTo = (name)=>{
        router.push('/u/'+name)
    }
    return (
        <Container>
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
                    <Box key={story.story_id} onClick={()=>{goTo(story.user)}}>
                        <Info>
                            <p>{story.user}</p>
                            <p>{day + " - " + monthNames[month]}</p>
                        </Info>
                        <Title>
                            <h1>{story.title.substr(0, 50)}</h1>
                        </Title>
                        <Text>
                            {arrayOfText.map((element, index) => {
                                return element == "" ? (
                                    <div key={index} />
                                ) : (
                                    <p key={index}>{element}</p>
                                );
                            })}
                        </Text>
                    </Box>
                );
            })}
        </Container>
    );
};
export default ExplorerPreview;
const Container = styled.div`
    display: flex;
    gap: 50px;
    padding: 50px;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Box = styled.div`
    height: 500px;
    width: 500px;
    background: #fff6e7;
    overflow: hidden;
    border-radius: 10px;
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2),
        0px 0px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2), 0px 0px 6px rgba(0, 0, 0, 0.2);
`;
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fee6c8;
    p {
        margin: 0;
    }
`;
const Title = styled.div`
    font-family: helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    padding: 10px;
    border-bottom: 1px solid red;
    h1 {
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        font-size: 30px;
        line-height: 40px;
        height: auto;
        margin: 0;
        text-align: center;
    }
`;
const Text = styled.div`
    padding: 0px 20px;
    font-family: helvetica neue, helvetica, arial, sans-serif;
    background: linear-gradient(to bottom, #fff6e7 29px, #00b0d7 1px);
    margin: auto;
    margin-top: 10px;
    background-size: 100% 30px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100%;
    overflow: hidden;
    text-align: justify;
    justify-content: center;
    p {
        background: transparent;
        margin: 0;
        width: 100%;
        border: none;
        font-size: 20px;
        line-height: 30px;
        resize: none;
    }
    div {
        height: 30px;
    }
`;
