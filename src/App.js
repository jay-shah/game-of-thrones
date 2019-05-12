import './App.css';
import { Grid, Header, Divider, Table, Image } from 'semantic-ui-react'
import GOT from './images/got.png'
import GOT1 from './images/got1.png'
import CharacterCard from './components/CharacterCard'
import PlayerCard from './components/PlayerCard'
import React, { Component } from 'react'
import Characters from './data/characters.json'
import Players from './data/players.json'

export default class App extends Component {

  getAliveCharacters = () => {

    const alive = Object.keys(Characters).map((name) => {
      if (Characters[name]["alive"]) {
        return (<CharacterCard image={require('./images/' + name + '.jpg')} name={name} />)
      }
    })
    return alive
  }

  getDeadCharacters = () => {

    const dead = Object.keys(Characters).map((name) => {
      if (!Characters[name]["alive"]) {
        return (<CharacterCard image={require('./images/' + name + '.jpg')} name={name} />)
      }
    })
    return dead
  }

  getPlayerCard = () => {
    const playerScores = this.calculatePoints()
    const colors = ["yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "red", "orange"]
    const player = playerScores.map((player, index) => {
      return (<PlayerCard image={require('./images/' + player[0] + '.jpg')} name={player[0]} position={index + 1} points={player[1]} ribbonColor={colors[index]} />)
    })
    return player
  }

  calculatePoints = () => {

    let scoreMap = {}
    Object.keys(Players).map((player) => {
      let score = 0
      Object.keys(Characters).forEach((character) => {
        if (Players[player][character]["alive"] === Characters[character]["alive"]) {
          score++;
        }
      })
      scoreMap[player] = score
    })
    var sortable = [];
    for (var score in scoreMap) {
      sortable.push([score, scoreMap[score]]);
    }

    return (sortable.sort(function (a, b) {
      return a[1] - b[1];
    }))
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
                  {this.getPlayerCard()}
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
