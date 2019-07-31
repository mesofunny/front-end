import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const PublicJokeCard = (props) => {
    return (
        <Grid.Column>
            <Segment>{props.props.id}</Segment>
            <p>{props.props.title}</p>
            <p>{props.props.joke}</p>
        </Grid.Column>
    )
}

export default PublicJokeCard; 