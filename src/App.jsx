import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import { Authenticator, AccountSettings, withAuthenticator } from '@aws-amplify/ui-react';
import { listThings } from './graphql/queries';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

Amplify.configure(awsmobile);

function App() {

  const [RandomThing, setThings] = useState(null); // [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchRandomThing();
  }, []);

  const fetchRandomThing = async () => {
    try {
      const client = generateClient();
      const thingData = await client.graphql({ query: listThings });
      const things = thingData.data.listThings.items;
      console.log('things:', things);
  
      // Select a random thing
      const randomThing = things[Math.floor(Math.random() * things.length)];
  
      // Set the state to the random thing
      setThings(randomThing);
    } catch (error) {
      console.log('error on fetching things', error);
    }
  }

  return (
    <div className="App">
        <header className="App-header">
        <Authenticator>
        {({ signOut, user = { username: '' } }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
            <h2>Build Free</h2>
        </header>
        <div className='Thing'>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Card sx={{ minWidth: 200, backgroundColor: 'green' }}>
          <CardContent>
            <Typography variant="h3" component="div" style={{ color: 'white' }}>
            {RandomThing && (
                    <p>{RandomThing.name}</p>
                )}
            </Typography>
          </CardContent>
          </Card>
        </Box>
        </div>
    </div>
);
}

export default withAuthenticator(App);
