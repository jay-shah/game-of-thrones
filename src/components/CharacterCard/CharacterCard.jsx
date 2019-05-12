import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'


const CharacterCard = ({ image, episode, name }) => {
    return (
        <Grid.Column mobile={4} tablet={8} computer={4}>
            <Card centered>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    {episode ? <Card.Meta> <span >Episode {episode}</span></Card.Meta> : null}
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CharacterCard
