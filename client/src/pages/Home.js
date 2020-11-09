import React from 'react';
import headsCoin from '../assets/heads.jpg'
import tailsCoin from '../assets/tails.jpg'
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
        <main>
            <div>
                <h1>Click the coin to decide your course!</h1>
                <input 
                    id="coin"
                    type="image"
                    src={side === 1 ? headsCoin : tailsCoin}
                    onClick={flipCoin}
                />
                <p>You have flipped the coin {flipped} times.</p>
                <p>The result is {side === 1 ? "heads" : "tails"}.</p>
                <ul>
                    <li>Heads: {heads}</li>
                    <li>Tails: {tails}</li>
                </ul>
            </div>
        </main>
    );
}

export default Home;