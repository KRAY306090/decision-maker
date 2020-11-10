import React from 'react';
import fortuneImage from '../assets/carnival-fortune-teller.jpg';
import { Container, Image, Grid } from 'semantic-ui-react';
const { useState } = React

const Fortune = () => {
    const [fortune, setFortune] = useState("Your Fortune")

    const fortunes = [
        "A secret admirer will soon send you a sign of affection",
        "Your heart is in a place to draw true happiness",
        "A thrilling time is in your near future",
        "The one you love is closer than you think",
        "Plan for many pleasures ahead",
        "Something you lost will turn up soon",
        "You will soon complete a class",
        "I see a certificate of completion in your future",
        "Life is short, grab a beer",
        "A beautiful, smart, and loving person will be coming into your life",
        "A dubious friend may be an enemy in camouflage",
        "A faithful friend is a strong defense",
        "A feather in the hand is better than a bird in the air",
        "A fresh start will put you on your way",
        "A friend asks only for your time not your money",
        "Accept something that you cannot change, and you will feel better",
        "Adventure can be real happiness",
        "Advice is like kissing. It costs nothing and is a pleasant thing to do",
        "Advice, when most needed, is least heeded",
        "Curiosity kills boredom. Nothing can kill curiosity",
        "Dedicate yourself with a calm mind to the task at hand",
        "Depart not from the path which fate has you assigned",
        "Determination is what you need now",
        "Diligence and modesty can raise your social status",
        "Disbelief destroys the magic",
        "Distance yourself from the vain",
        "Every wise man started out by asking many questions",
        "Everyday in your life is a special occasion",
        "Everywhere you choose to go, friendly faces will greet you",
        "Expect much of yourself and little of others",
        "Failure is the chance to do better next time",
        "Failure is the path of lease persistence",
        "Fear and desire – two sides of the same coin",
        "Fearless courage is the foundation of victory",
        "Feeding a cow with roses does not get extra appreciation",
        "First think of what you want to do; then do what you have to do",
        "Follow the middle path. Neither extreme will make you happy",
        "For hate is never conquered by hate. Hate is conquered by love",
        "For the things we have to learn before we can do them, we learn by doing them",
        "Fortune Not Found: Abort, Retry, Ignore",
        "If you continually give, you will continually have",
        "If you look in the right places, you can find some good offerings",
        "If you think you can do a thing or think you can’t do a thing, you’re right",
        "If you wish to see the best in others, show the best of yourself",
        "If your desires are not extravagant, they will be granted",
        "If your desires are not to extravagant they will be granted",
        "If you’re feeling down, try throwing yourself into your work",
        "Imagination rules the world",
        "In order to take, one must first give",
        "In the end all things will be known",
        "In this world of contradiction, It’s [sic] better to be merry than wise",
        "It could be better, but its[sic] good enough",
        "It is better to be an optimist and proven a fool than to be a pessimist and be proven right",
        "It is better to deal with problems before they arise",
        "It is honorable to stand up for what is right, however unpopular it seems",
        "It is worth reviewing some old lessons",
        "It takes courage to admit fault"
    ]

    const yourFortune = () => {
        const guidance = Math.round(Math.random() * fortunes.length)

        setFortune(fortunes[guidance - 1])
    }

    return (
        <Container style={{ marginTop: '12em' }}>
            <Grid>
                <Grid.Column width={5}>
                <Image
                    id="eightball"
                    src={fortuneImage}
                    onClick={yourFortune}
                />
                </Grid.Column>
                <Grid.Column width={10}>
                <h1>Ask the EightBall for guidance!</h1>
                <p>Ask your question and click the Magic8ball!</p>
                <p>Your Fortune: {fortune}.</p>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Fortune;