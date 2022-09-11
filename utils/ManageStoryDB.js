
//Manage the story related events to DB
const deleteFromDB = async(key, name) => {
    const deleteFrom = await fetch("../api/deleteStory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: name,
            story_id: key,
        }),
    }).then(() => {
        alert("Story Deleted");
    });

}
const createStoryDB = async(name) => {
    const createStory = await fetch("../api/createnewstory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: name,
        }),
    }).then(() => {
        alert("Story Created");
    });
}
//This one works to save and publish
const saveStoryDB = async(StoryInfo) =>{
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
            alert("We cannot save your story right now!");
        }
    });
}
const publishStoryDB = async(StoryInfo) =>{
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
                alert("Story Published");
            } else {
                alert("We cannot publish your story right now!");
            }
        });
    
}
const unpublishStoryDB = async(StoryInfo) =>{
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
                alert("Story Unpublished");
            } else {
                alert("We cannot Unpublish your story right now!");
            }
        });
    
}

export {deleteFromDB, createStoryDB, saveStoryDB, publishStoryDB, unpublishStoryDB}