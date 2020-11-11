import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DECISION } from '../utils/mutations';
import { Form, Grid } from 'semantic-ui-react';

// importing so we can update cached thoughts array
import { QUERY_DECISIONS, QUERY_ME } from '../utils/queries';
// import { from } from 'apollo-boost';

const Create = () => {
  const [decisionText, setDecisionText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [name, setName] = useState('')
  const [pros, setPros] = useState([])
  const [cons, setCons] = useState([])
  const [addDecision, { error }] = useMutation(ADD_DECISION, {
    update(cache, { data: { addDecision } }) {
      try {
        //read what's currently in the cache
        const { decisions } = cache.readQuery({ query: QUERY_DECISIONS })
        //prepend thenewest thought to the front of the array
        cache.writeQuery({
          query: QUERY_DECISIONS,
          data: { decisions: [addDecision, ...decisions] }
        })
      } catch (e) {
        console.error(e)
      }
      //update me object's cache, appending new thought to the end of the array
      // const { me } = cache.readQuery({ query: QUERY_ME })
      // cache.writeQuery({
      //     query: QUERY_ME,
      //     data: { me: { ...me, decisions: [...me.decisions, addDecision ] } }
      // })
    }
  })

  const [pro, setPro] = useState('')
  const [con, setCon] = useState('')

  const handleDecisionChange = event => {
    if (event.target.value.length <= 280) {
      setDecisionText(event.target.value)
      setCharacterCount(event.target.value.length)
    }
  }



  const handleFormSubmit = async event => {
    event.preventDefault()

    try {
      // add thought to database
      await addDecision({
        variables: { name, decisionText, pros, cons }
      })

      // clear form value
      setName('')
      setDecisionText('')
      setPros([])
      setCons([])
      setCharacterCount(0)
    } catch (e) {
      console.error(e)
    }
  }

  const handleProsChange = event => {
    if (event.target.value.length > 0) {
      setPro(event.target.value)
    }
  }

  const handleProsSubmit = () => {
    if (!pro == '') {
      const newPros = pros.concat({ pro })
      setPros(newPros)
      setPro('')
    }
  }

  const handleConsChange = event => {
    if (event.target.value.length > 0) {
      setCon(event.target.value)
    }
  }

  const handleConsSubmit = () => {
    if (!con == '') {
      const newCons = cons.concat({ con })
      setCons(newCons)
      setCon('')
      console.log(con)
      console.log(cons)
    }
  }

  return (
    <Form style={{ paddingTop: '30vh', paddingBottom: '29vh' }}>
      <Grid container className="Box" style={{padding: '30px'}}>
        <Grid.Row>
          <Form.Group>
            <label>Name: </label>
            <Form.Input placeholder='Name your conundrum!' />
          </Form.Group>
        </Grid.Row>
        <Grid.Row>
          <label>Decision: </label>
          <Form.TextArea
            placeholder="Here's a new conundrum..."
            value={decisionText}
            style={{ width: '30em' }}
            onChange={handleDecisionChange}
          />
        </Grid.Row>
        <Grid.Row>
          <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
            Character Count: {characterCount}/280
        {error && <span >Something went wrong...</span>}
          </p>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Form.Group inline>
            <label style={{color: 'white'}}>Pros: </label>
            <Form.Input type="text" value={pro} placeholder='Enter a Pro here!' onChange={handleProsChange} />
            <Form.Button onClick={handleProsSubmit}> + </Form.Button>
          </Form.Group>
          <Form.Group inline>
            <label style={{color: 'white'}}>Cons: </label>
            <Form.Input type="text" value={con} placeholder='Enter a Con here!' onChange={handleConsChange} />
            <Form.Button onClick={handleConsSubmit}> + </Form.Button>
          </Form.Group>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            {pros.length > 0 &&
              <div>
                <p>Pros</p>
                <ul>
                  {pros.map((item) => (
                    <li key={item.id}>{item.pro}</li>
                  ))}
                </ul>
              </div>
            }
          </Grid.Column>
          <Grid.Column width={5}>
            {cons.length > 0 &&
              <div>
                <p>Cons</p>
                <ul>
                  {cons.map((item) => (
                    <li key={item.id}>{item.con}</li>
                  ))}
                </ul>
              </div>
            }
          </Grid.Column>
        </Grid.Row>
        <Form.Button onClick={handleFormSubmit}>Submit</Form.Button>
      </Grid>
    </Form>

  );
};


export default Create;