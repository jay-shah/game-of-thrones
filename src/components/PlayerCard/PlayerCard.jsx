import React from 'react'
import { Table, Image, Label, Header } from 'semantic-ui-react'

const PlayerCard = ({ image, position, name, points }) => {
    return (
        <Table.Row>
            <Table.Cell width={2}>
                <Label ribbon color='yellow'>{position}</Label>
            </Table.Cell>
            <Table.Cell width={3}> <Image src={image} size='tiny' circular /></Table.Cell>
            <Table.Cell width={5}>
                <Header as='h2'>
                    {name}
                </Header>
            </Table.Cell>
            <Table.Cell width={3}>
                <Header as='h2'>
                    {points}
                </Header></Table.Cell>
        </Table.Row>
    )
}

export default PlayerCard