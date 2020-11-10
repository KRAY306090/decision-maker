import React from 'react';
import headsCoin from '../assets/heads.jpg'
import tailsCoin from '../assets/tails.jpg'
import { Container, Grid, Image, Divider } from 'semantic-ui-react';
const { useState } = React



const Home = () => {
    const [side, setSide] = useState(1)
    const [heads, setHeads] = useState(0)
    const [tails, setTails] = useState(0)

    const flipped = heads + tails

    const flipCoin = () => {
        const landedOn = Math.round(Math.random())

        if (landedOn === 1) {
            setHeads(heads + 1)
        } else {
            setTails(tails + 1)
        }

        setSide(landedOn)
    }

    return (
       
        <Container style={{ marginTop: '12em' }}>
            <Grid>
            <Grid.Column width={5}>
                <Image
                    size="massive"
                    id="coin"
                    type="image"
                    src={side === 1 ? headsCoin : tailsCoin}
                    onClick={flipCoin}
                />
                </Grid.Column>
                <Grid.Column width={10}>
                <h1>Click the coin to decide your course!</h1>
                <p>You have flipped the coin {flipped} times.</p>
                <p>The result is {side === 1 ? "heads" : "tails"}.</p>
                <ul>
                    <li>Heads: {heads}</li>
                    <li>Tails: {tails}</li>
                </ul>
                </Grid.Column>
            </Grid>
            </Container>
           
    );
}

export default Home;