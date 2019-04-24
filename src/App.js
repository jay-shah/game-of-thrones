import React from 'react';
import './App.css';
import { Grid, Header, Icon, Card, Divider } from 'semantic-ui-react'
import Elliot from './images/jamie.jpg'
import Daniel from './images/daniel.jpg'
import CharacterCard from './components/CharacterCard'

function App() {
  return (
    <Grid divided columns={2} padded stackable  >

      <Grid.Column  >
        <Grid.Row className="Title"  >
          <Header as='h2' icon textAlign='center'   >
            <Icon name='users' circular />
            <Header.Content>Characters</Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row  >
          <Header as='h2' icon textAlign='left' className="Alive" color="green">
            <Header.Content>ALIVE</Header.Content>
          </Header>
        </Grid.Row>
        <Grid padded stackable >
          <CharacterCard image={Elliot} />
          <CharacterCard image={Elliot} />
          <CharacterCard image={Elliot} />
          <CharacterCard image={Elliot} />
          <CharacterCard image={Elliot} />
          <CharacterCard image={Elliot} />
        </Grid>
        <Divider hidden />
        <Grid.Row  >
          <Header as='h2' icon textAlign='left' className="Alive" color="red">
            <Header.Content>DEAD</Header.Content>
          </Header>
        </Grid.Row>
        <Grid columns={5} padded stackable >
          <CharacterCard image={Daniel} episode={1} />
          <CharacterCard image={Daniel} episode={1} />
          <CharacterCard image={Daniel} episode={1} />
          <CharacterCard image={Daniel} episode={1} />
          <CharacterCard image={Daniel} episode={4} />
          <CharacterCard image={Daniel} episode={6} />
        </Grid>

      </Grid.Column>


      <Grid.Column >
        <Grid.Row className="Title"  >
          <Header as='h2' icon textAlign='center'  >
            <Icon name='users' circular />
            <Header.Content>People</Header.Content>
          </Header>
        </Grid.Row>
      </Grid.Column>


    </Grid>

  );
}


export default App;
