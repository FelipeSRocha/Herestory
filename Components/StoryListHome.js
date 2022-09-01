import styled from "styled-components";
import Theme from "../styles/theme";
import MenuBtn from "./MenuBtn";
import { CreateStoryBtn } from "../utils/MenuButtons";

const StoryListHome = ({
    story,
    selected,
    selectStory,
    router,
}) => {
    return (
        <Theme>
            <Head>
                <h1>Stories</h1>
            </Head>
            <Container>
                <SecondContainer>
                    {story.length > 0
                        ? story.map((element, index) => {
                              const key = element.story_id;
                              const title = element.title.substr(0, 40);
                              const preview = element.text.substr(0, 80);
                              function setStory(event) {
                                  selectStory(event);
                              }
                              return (
                                  <StoryBox key={"box_" + key} id={index}>
                                      <ClickBox key={"title_" + key} id={index}>
                                          <ClickBoxLeft
                                              onClick={setStory}
                                              id={index}
                                          >
                                              <Title id={index}>{title}</Title>

                                              <PreviewText
                                                  key={"preview_" + key}
                                                  id={index}
                                                  onClick={setStory}
                                              >
                                                  "{preview}..."
                                              </PreviewText>
                                          </ClickBoxLeft>
                                          
                                      </ClickBox>
                                  </StoryBox>
                              );
                          })
                        : null}
                </SecondContainer>
            </Container>
        </Theme>
    );
};
export default StoryListHome;
const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const SecondContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 276px;
    height: 100%;
    overflow-y: scroll;
    padding-right: 20px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box; /* So the width will be 100% + 17px */
`;
const Head = styled.div`
    margin-bottom: 40px;
    h1 {
        font-family: helvetica neue, helvetica, arial, sans-serif;
        font-size: 25px;
        text-align: center;
    }
`;
const StoryBox = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;

    .none {
        display: none;
    }
`;
const ClickBox = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    height: 130px;
    width: 256px;
    background-color: ${(props) => props.theme.color.secundary};
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    :hover {
        background-color: ${(props) => props.theme.color.text};
        color: ${(props) => props.theme.color.secundary};
    }
`;
const ClickBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;
const Title = styled.h2`
    height: 100%;
    margin: 0;
    z-index: 1;
    font-size: 20px;
`;
const PreviewText = styled.p`
    height: 100%;

    margin: 0;
    z-index: 1;
    font-size: 15px;
`;
