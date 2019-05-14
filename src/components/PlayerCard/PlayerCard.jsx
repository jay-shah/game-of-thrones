import React from 'react'
import styles from './PlayerCard.module.css'
import Players from '../../data/players'
import Characters from '../../data/characters'
import { Table, Image, Label, Header, Modal, List, Icon, Divider } from 'semantic-ui-react'

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

    const aliveCharacters = () => (
        Object.keys(Players[name]["characters"]).map((character) => {
            if (Players[name]["characters"][character]['alive']) {
                return (
                    <List.Item className={styles.listitem}>
                        <List.Content>
                            <Image src={require('../../images/characters/' + character + '.jpg')} rounded size='tiny' />
                            <Header className={styles.alive} textAlign='center' as='h3'> ALIVE</Header>
                            {Players[name]["characters"][character]['alive'] === Characters["characters"][character]["alive"] ?
                                <Header className={styles.alive} textAlign='center'> <Icon name='check' /></Header> :
                                <Header className={styles.dead} textAlign='center'> <Icon name='close' /></Header>
                            }

                        </List.Content>
                    </List.Item >
                )
            }
        })
    )

    const deadCharacters = () => (
        Object.keys(Players[name]["characters"]).map((character) => {
            if (!Players[name]["characters"][character]['alive']) {
                return (
                    <List.Item className={styles.listitem}>
                        <List.Content>
                            <Image src={require('../../images/characters/' + character + '.jpg')} rounded size='tiny' />
                            <Header className={styles.dead} textAlign='center' as='h3'>DEAD {Players[name]["characters"][character]['episode'] ? Players[name]["characters"][character]['episode'] : null}</Header>
                            {!Players[name]["characters"][character]['alive'] === !Characters["characters"][character]["alive"] ?
                                <Header className={styles.alive} textAlign='center'> <Icon name='check' /></Header> :
                                <Header className={styles.dead} textAlign='center'> <Icon name='close' /></Header>
                            }
                        </List.Content>
                    </List.Item>
                )
            }
        })

    )



    return (
        <Modal trigger={tableRow()}>
            {/* <Modal.Header>{name}</Modal.Header> */}
            <Modal.Content image scrolling>
                <Image wrapped size='medium' src={image} />
                <Modal.Description>
                    <Header as='h1'>{name}</Header>
                </Modal.Description>
            </Modal.Content>
            <Modal.Content>
                <Divider fitted hidden />
                <List horizontal>
                    {aliveCharacters()}
                </List>
                <Divider />
                <List horizontal>
                    {deadCharacters()}
                </List>
                <Divider />
                <List >
                    <List.Item >
                        <List.Content>
                            <Header as='h2'>
                                <Icon name='child' />
                                <Header.Content>Is Daenerys pregnant?
                                    <span className={styles.bonus}> {Players[name]['bonus']["1"]}</span>
                                    {Players[name]["bonus"]["1"] === Characters["bonus"]["1"] ?
                                        <span className={styles.alive} textAlign='center'> <Icon name='check' /></span> :
                                        <span className={styles.dead} textAlign='center'> <Icon name='close' /></span>
                                    }
                                </Header.Content>
                            </Header>
                            <Divider hidden />
                            <Header as='h2'>
                                <Icon name='eye' />
                                <Header.Content>How many Dragons Left? <span className={styles.bonus}>{Players[name]['bonus']["2"]}</span>
                                    {Players[name]["bonus"]["2"] === Characters["bonus"]["2"] ?
                                        <span className={styles.alive} textAlign='center'> <Icon name='check' /></span> :
                                        <span className={styles.dead} textAlign='center'> <Icon name='close' /></span>
                                    }</Header.Content>
                            </Header>
                            <Divider hidden />
                            <Header as='h2'>
                                <Icon name='male' />
                                <Header.Content>Which Clegane triumphs? <span className={styles.bonus}>{Players[name]['bonus']["3"]}
                                    {Players[name]["bonus"]["3"] === Characters["bonus"]["3"] ?
                                        <span className={styles.alive} textAlign='center'> <Icon name='check' /></span> :
                                        <span className={styles.dead} textAlign='center'> <Icon name='close' /></span>
                                    }</span></Header.Content>
                            </Header>
                            <Divider hidden />
                            <Header as='h2'>
                                <Icon name='chess knight' />
                                <Header.Content>If the Night King Dies, who kills him? <span className={styles.bonus}>{Players[name]['bonus']["4"]}
                                    {Players[name]["bonus"]["4"] === Characters["bonus"]["4"] ?
                                        <span className={styles.alive} textAlign='center'> <Icon name='check' /></span> :
                                        <span className={styles.dead} textAlign='center'> <Icon name='close' /></span>
                                    }</span></Header.Content>
                            </Header>
                            <Divider hidden />
                            <Header as='h2'>
                                <Icon name='wheelchair' />
                                <Header.Content>Who holds the Iron Throne at the end? <span className={styles.bonus}>{Players[name]['bonus']["5"]}
                                    {Players[name]["bonus"]["5"] === Characters["bonus"]["5"] ?
                                        <span className={styles.alive} textAlign='center'> <Icon name='check' /></span> :
                                        <span className={styles.dead} textAlign='center'> <Icon name='close' /></span>
                                    }</span></Header.Content>
                            </Header>
                        </List.Content>
                    </List.Item>
                </List>

            </Modal.Content>

        </Modal>

    )
}

export default PlayerCard