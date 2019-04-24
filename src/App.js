import React from 'react';
import './App.css';
import { Grid, Header, Icon, Card, Divider } from 'semantic-ui-react'
import Elliot from './images/jamie.jpg'
import Daniel from './images/daniel.jpg'

function App() {
  return (
    <Grid divided columns={2} padded stackable >

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
        <Grid columns={6} padded stackable >
          <Grid.Row  >
            <Grid.Column>
              <Card
                image={Elliot}
                header='Jamie Lannister'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Elliot}
                header='Elliot Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Elliot}
                header='Elliot Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Elliot}
                header='Elliot Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Elliot}
                header='Elliot Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Elliot}
                header='Elliot Baker'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />

        <Grid.Row  >
          <Header as='h2' icon textAlign='left' className="Alive" color="red">
            <Header.Content>DEAD</Header.Content>
          </Header>
        </Grid.Row>
        <Grid divided columns={5} padded stackable >
          <Grid.Row  >
            <Grid.Column>
              <Card
                image={Daniel}
                header='Daniel Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Daniel}
                header='Daniel Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Daniel}
                header='Daniel Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Daniel}
                header='Daniel Baker'
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={Daniel}
                header='Daniel Baker'
              />
            </Grid.Column>
          </Grid.Row>
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
