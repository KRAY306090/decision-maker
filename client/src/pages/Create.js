import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DECISION} from '../utils/mutations';
import { Form } from 'semantic-ui-react';

// importing so we can update cached thoughts array
import { QUERY_DECISIONS, QUERY_ME } from '../utils/queries';
import { from } from 'apollo-boost';

const Create = () => {
    const [decisionText, setDecisionText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [name, setName] = useState('') 
    const [pros, setPros] = useState([])
    const [cons, setCons] = useState([])
    const [addDecision, {error}] = useMutation(ADD_DECISION, {
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
            const { me } = cache.readQuery({ query: QUERY_ME })
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, decisions: [...me.decisions, addDecision ] } }
            })
        }
    })

    const prosArray = []
    const consArray = []

    const handleDecisionChange = event => {
        if (event.target.value.length <= 280) {
            setDecisionText(event.target.value)
            setCharacterCount(event.target.value.length)
        }
    }

    const handleProsSubmit = event => {
      event.preventDefault()


    }

    const handleFormSubmit = async event => {
        event.preventDefault()
        
        try {
            // add thought to database
            await addDecision({
                variables: {name, decisionText, pros, cons}
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

    
  return (
    <div>
      
      <Form 
        onSubmit={handleFormSubmit}
      >
        <Form.TextArea
          label='Decision'
          placeholder="Here's a new conundrum..."
          value={decisionText}
          className=""
          onChange={handleDecisionChange}
        />
        <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span >Something went wrong...</span>}
        </p>
        <Form.Group inline>
          <label>Pros: </label>
          <Form.Input id='prosInput' value='' placeholder='Enter a Pro here!'/>
          <Form.Button> + </Form.Button>
        </Form.Group>
        <Form.Group inline>
          <label>Cons: </label>
          <Form.Input id='consInput' placeholder='Enter a Con here!'/>
          <Form.Button> + </Form.Button>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
};


export default Create;


{/* <textarea
          id="decision"
          placeholder="Here's a new conundrum..."
          value={decisionText}
          className=""
          onChange={handleDecisionChange}
        ></textarea>
        <input>
        </input>
        <input>
        </input>
        <button className="" type="submit">
          Submit
        </button> */}