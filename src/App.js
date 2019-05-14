// Up to Bhavin



import './App.css';
import { Grid, Header, Divider, Table, Image, Icon } from 'semantic-ui-react'
import GOT from './images/got.png'
import Throne from './images/throne.png'
import CharacterCard from './components/CharacterCard'
import PlayerCard from './components/PlayerCard'
import React, { Component } from 'react'
import Characters from './data/characters.json'
import Players from './data/players.json'

export default class App extends Component {

  getAliveCharacters = () => {

    const alive = Object.keys(Characters['characters']).map((name) => {
      if (Characters['characters'][name]["alive"]) {
        return (<CharacterCard image={require('./images/characters/' + name + '.jpg')} name={name} />)
      }
    })
    return alive
  }

  getDeadCharacters = () => {

    const dead = Object.keys(Characters['characters']).map((name) => {
      if (!Characters['characters'][name]["alive"]) {
        return (<CharacterCard image={require('./images/characters/' + name + '.jpg')} name={name} episode={Characters['characters'][name]["episode"]} />)
      }
    })
    return dead
  }

  getPlayerCard = () => {
    const playerScores = this.calculatePoints()
    const colors = ["yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "red", "orange"]
    const player = playerScores.slice(0).reverse().map((player, index) => {
      return (<PlayerCard image={require('./images/players/' + player[0] + '.jpg')} name={player[0]} position={index + 1} points={player[1]} ribbonColor={colors[index]} />)
    })
    return player
  }

  calculatePoints = () => {

    let scoreMap = {}
    Object.keys(Players).map((player) => {
      let score = 0
      Object.keys(Characters['characters']).forEach((character) => {
        if (Players[player]["characters"][character]["alive"] && Characters['characters'][character]["alive"]) {
          score++;
        }

        if (!Players[player]["characters"][character]["alive"] && !Characters['characters'][character]["alive"]) {
          if (!Players[player]["characters"][character]["episode"]) {
            score++;
          }
          else if (Players[player]["characters"][character]["episode"] === Characters['characters'][character]["episode"]) {
            score += 2;
          }
        }
      })

      if (Players[player]['bonus']["1"] === Characters["bonus"]["1"]) {
        score++
      }
      if (Players[player]['bonus']["2"] === Characters["bonus"]["2"]) {
        score++
      }
      if (Players[player]['bonus']["3"] === Characters["bonus"]["3"]) {
        score++
      }
      if (Players[player]['bonus']["4"] === Characters["bonus"]["4"]) {
        score += 2
      }
      if (Players[player]['bonus']["5"] === Characters["bonus"]["5"]) {
        score += 4
      }
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
            <Header as='h1' icon textAlign='center' className="Alive" color="green">
              <Header.Content>ALIVE</Header.Content>
            </Header>

          </Grid.Row>
          <Grid padded stackable >
            {this.getAliveCharacters()}
          </Grid>
          <Divider hidden />
          <Grid.Row  >
            <Header as='h1' icon textAlign='center' className="Alive" color="red">
              <Header.Content>DEAD</Header.Content>
            </Header>
          </Grid.Row>
          <Grid columns={5} padded stackable >
            {this.getDeadCharacters()}
          </Grid>
          <Divider hidden />
          <Grid.Row  >
            <Header as='h1' icon textAlign='center' className="Alive" color="violet">
              <Header.Content>BONUS</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row  >
            <Header as='h2'>
              <Icon name='child' />
              <Header.Content>Is Daenerys pregnant? <span className="answers">{Characters['bonus']["1"]}</span></Header.Content>
            </Header>
            <Divider hidden />
            <Header as='h2'>
              <Icon name='eye' />
              <Header.Content>How many Dragons Left? <span className="answers">{Characters['bonus']["2"]}</span></Header.Content>
            </Header>
            <Divider hidden />
            <Header as='h2'>
              <Icon name='male' />
              <Header.Content>Which Clegane triumphs? <span className="answers">{Characters['bonus']["3"]}</span></Header.Content>
            </Header>
            <Divider hidden />
            <Header as='h2'>
              <Icon name='chess knight' />
              <Header.Content>If the Night King Dies, who kills him? <span className="answers">{Characters['bonus']["4"]}</span></Header.Content>
            </Header>
            <Divider hidden />
            <Header as='h2'>
              <Icon name='wheelchair' />
              <Header.Content>Who holds the Iron Throne at the end? <span className="answers">{Characters['bonus']["1"]}</span></Header.Content>
            </Header>
          </Grid.Row>

        </Grid.Column>

        <Grid.Column >
          <Grid.Row className="Title"  >
            <Image src={Throne} rounded size='medium' centered />
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
