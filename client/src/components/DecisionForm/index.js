import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DECISION} from '../../utils/mutations';

// importing so we can update cached thoughts array
import { QUERY_DECISIONS, QUERY_ME } from '../../utils/queries';

const DecisionForm = () => {
    const [decisionText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
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

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value)
            setCharacterCount(event.target.value.length)
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault()
        
        try {
            // add thought to database
            await addDecision({
                variables: {decisionText}
            })

            // clear form value
            setText('')
            setCharacterCount(0)
        } catch (e) {
            console.error(e)
        }
    }

    
  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span >Something went wrong...</span>}
      </p>
      <form 
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new conundrum..."
          value={decisionText}
          className=""
          onChange={handleChange}
        ></textarea>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DecisionForm;