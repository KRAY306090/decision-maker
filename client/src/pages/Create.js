import React from 'react';
import { Form } from 'semantic-ui-react';

const Create = () => {
    return (
        <Form>
            <Form.Input
                className="form-input"
                placeholder='Decision Title'
                name='title'
                id='title'
            />

            

        </Form>
    );
}

export default Create;