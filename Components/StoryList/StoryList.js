import MenuBtn from "../MenuBtn/MenuBtn";
import { CreateStoryBtn } from "../../utils/MenuButtons";
import * as S from "./style"
const StoryList = ({
    story,
    selected,
    selectStory,
    edit,
    deletestory,
    router,
    name,
}) => {
    return (
        <>
            <S.Head>
                <h1>Your Stories</h1>
                <MenuBtn
                    id="MenuBtn"
                    data={[CreateStoryBtn(router, name)]}
                ></MenuBtn>
            </S.Head>
            <S.Container>
                <S.SecondContainer>
                    {story.length > 0
                        ? story.map((element, index) => {
                              const key = element.story_id;
                              const title = element.title.substr(0, 40);
                              const preview = element.text.substr(0, 80);
                              function setStory(event) {
                                  selectStory(event);
                              }
                              function editStory(key) {
                                  edit(key);
                              }
                              function DeleteStory(event, key) {
                                  deletestory(event, key);
                              }
                              return (
                                  <S.StoryBox key={"box_" + key} id={index}>
                                      <S.ClickBox key={"title_" + key} id={index}>
                                          <S.ClickBoxLeft
                                              onClick={setStory}
                                              id={index}
                                          >
                                              <S.Title id={index}>{title}</S.Title>

                                              <S.PreviewText
                                                  key={"preview_" + key}
                                                  id={index}
                                                  onClick={setStory}
                                              >
                                                  "{preview}..."
                                              </S.PreviewText>
                                          </S.ClickBoxLeft>
                                          <S.ClickBoxRigth>
                                              <button
                                                  className={
                                                      selected == index
                                                          ? "selected"
                                                          : "none"
                                                  }
                                                  onClick={() => editStory(key)}
                                                  key={"edit_" + key}
                                                  id={index}
                                              >
                                                  Edit Story
                                              </button>
                                              <button
                                                  className={
                                                      selected == index
                                                          ? "selected"
                                                          : "none"
                                                  }
                                                  onClick={() =>
                                                      DeleteStory(key)
                                                  }
                                                  key={"delete_" + key}
                                                  id={index}
                                              >
                                                  Delete Story
                                              </button>
                                          </S.ClickBoxRigth>
                                      </S.ClickBox>
                                  </S.StoryBox>
                              );
                          })
                        : null}
                </S.SecondContainer>
            </S.Container>
        </>
    );
};
export default StoryList;
