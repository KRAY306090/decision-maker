import React from 'react';
import eightball from '../assets/magic8ball.jpg';
import { Container, Image, Grid } from 'semantic-ui-react';
const { useState } = React

const EightBall = () => {
    const [answer, setAnswer] = useState("Magic8ball")

    const answers = [
        "As I see it, yes",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Outlook good",
        "Reply hazy, try again",
        "Signs point to yes",
        "Very doubtful",
        "Without a doubt",
        "Yes",
        "Yes – definitely",
        "You may rely on it"
    ]

    const magic = () => {
        const guidance = Math.round(Math.random() * answers.length)

        setAnswer(answers[guidance - 1])
    }

    return (
        <Container style={{ paddingTop: '30vh', paddingBottom: '50vh'} }>
            <Grid>
                <Grid.Column width={5}>
                <Image
                    id="eightball"
                    src={eightball}
                    onClick={magic}
                />
                </Grid.Column>
                <Grid.Column width={10}>
                <h1>Ask the EightBall for guidance!</h1>
                <p>Ask your question and click the Magic8ball!</p>
                <p>Your guidance: {answer}.</p>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default EightBall;