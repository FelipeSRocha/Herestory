
//Manage the story related events to DB
const deleteFromDB = async(key, data) => {
    const deleteFrom = await fetch("../api/deleteStory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: data.user.name,
            story_id: key,
        }),
    }).then(() => {
        alert("Story Deleted");
    });
}
const createStoryDB = async(data) => {
    const createStory = await fetch("../api/createnewstory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: data.name,
        }),
    }).then(() => {
        alert("Story Created");
    });
}
//This one works to save and publish
const updateStoryDB = async(StoryInfo) =>{
    console.log(StoryInfo)
    const updateStory = await fetch("../../api/updateStory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: StoryInfo.title,
            text: StoryInfo.text,
            story_id: StoryInfo.story_id,
            published: StoryInfo.published,
            publishedAt: StoryInfo.publishedAt,
        }),
    }).then((res) => {
        if (res.status == 200) {
            alert("Story Saved");
        } else {
            alert("We cannot save yout story right now!");
        }
    });
}

export {deleteFromDB, createStoryDB, updateStoryDB}