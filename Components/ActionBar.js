import styled from "styled-components";
import mongoose from "mongoose";
import Model from '../models/story_model'

export default async function ActionBar() {
    mongoose.connect(process.env.MONGODB_URL);
    async function createStory(){
        const new_Story  = Model.create({
            user: req.body.user,
            title: "",
            text:"",
        });
    }
    return (
        <Container>
            <button></button>
        </Container>
    );
}

const Container = styled.div``;
