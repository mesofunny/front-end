import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const PublicJokeCard = (props, color) => {
    return (
        <Grid.Column className={`public-card ${color}`}>
            <Segment>{props.props.id}. <strong>{props.props.title}</strong>
            <p>{props.props.joke}</p></Segment>
        </Grid.Column>
    )
}

export default PublicJokeCard; 