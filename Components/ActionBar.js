import styled from "styled-components";

export default function ActionBar() {
    function createStory() {
        console.log("log");
        fetch("../api/createstory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: "test",
            }),
        });
    }
    return (
        <Container>
            <button onClick={createStory}>Create</button>
        </Container>
    );
}

const Container = styled.div``;
