import './App.css';
import { Grid, Header, Divider, Table, Image } from 'semantic-ui-react'
import Elliot from './images/jamie.jpg'
import Daniel from './images/daniel.jpg'
import GOT from './images/got.png'
import GOT1 from './images/got1.png'
import CharacterCard from './components/CharacterCard'
import PlayerCard from './components/PlayerCard'
import React, { Component } from 'react'
import Characters from './data/characters.json'

export default class App extends Component {

  getAliveCharacters = () => {

    const alive = Object.keys(Characters).map((name) => {
      if (Characters[name]["alive"]) {
        return (<CharacterCard image={Elliot} name={name} />)
      }
    })
    return alive
  }

  getDeadCharacters = () => {

    const dead = Object.keys(Characters).map((name) => {
      if (!Characters[name]["alive"]) {
        return (<CharacterCard image={Daniel} name={name} />)
      }
    })
    return dead
  }

  render() {

    return (
      <Grid divided columns={2} padded stackable>
        <Grid.Column  >
          <Grid.Row className="Title" centered >
            <Image src={GOT} rounded size='medium' centered />

          </Grid.Row>
          <Grid.Row  >
            <Header as='h2' icon textAlign='left' className="Alive" color="green">
              <Header.Content>ALIVE</Header.Content>
            </Header>
          </Grid.Row>
          <Grid padded stackable >
            {this.getAliveCharacters()}
          </Grid>
          <Divider hidden />
          <Grid.Row  >
            <Header as='h2' icon textAlign='left' className="Alive" color="red">
              <Header.Content>DEAD</Header.Content>
            </Header>
          </Grid.Row>
          <Grid columns={5} padded stackable >
            {this.getDeadCharacters()}
          </Grid>

        </Grid.Column>


        <Grid.Column >
          <Grid.Row className="Title"  >
            <Image src={GOT1} rounded size='medium' centered />
          </Grid.Row>

          <Grid>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={14}>
              <Table size='small' >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Picture Perfect</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <PlayerCard image={require('./images/jamie.jpg')} name='Jay Shah' position='1' points='15' />
                  <PlayerCard image={require('./images/jamie.jpg')} name='Jay Shah' position='1' points='15' />
                  <PlayerCard image={require('./images/jamie.jpg')} name='Jay Shah' position='1' points='15' />
                  <PlayerCard image={require('./images/jamie.jpg')} name='Jay Shah' position='1' points='15' />
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
          </Grid>

        </Grid.Column>


      </Grid >

    );
  }
}
