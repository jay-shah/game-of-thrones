import React from 'react'
import styles from './PlayerCard.module.css'
import { Table, Image, Label, Header, Modal } from 'semantic-ui-react'

const PlayerCard = ({ image, position, name, points, ribbonColor }) => {

    const tableRow = () => {
        return (
            <Table.Row className={styles.tablerow}>
                <Table.Cell width={2}>
                    <Label ribbon color={ribbonColor}>{position}</Label>
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


    return (
        <Modal trigger={tableRow()}>
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src={image} />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>

    )
}

export default PlayerCard