import React from 'react';
import headsCoin from '../assets/heads.png'
import tailsCoin from '../assets/tails.png'
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
       
        <Container style={{ paddingTop: '30vh', paddingBottom: '29vh'} }>
            <Grid columns={2} className="Box" divided>
                <Grid.Row>
            <Grid.Column  width={5}>
                <Image
                    className="boxContent"
                    size="massive"
                    id="coin"
                    type="image"
                    src={side === 1 ? headsCoin : tailsCoin}
                    onClick={flipCoin}
                />
                </Grid.Column>
                
                <Grid.Column width={10} >
                <div className="boxContent">    
                <h1>Click the coin to decide your course!</h1>
                <p>You have flipped the coin {flipped} times.</p>
                <p>The result is {side === 1 ? "heads" : "tails"}.</p>
                <ul>
                    <li>Heads: {heads}</li>
                    <li>Tails: {tails}</li>
                </ul>
                </div>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
           
    );
}

export default Home;