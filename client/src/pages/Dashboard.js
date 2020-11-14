//temporarily coded out some functionality for future development

import React from 'react';
import { QUERY_ME } from '../utils/queries';
// import { DELETE_DECISION } from '../utils/mutations';
// import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Card, Button } from 'semantic-ui-react';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_ME);
    // const [deleteDecision, { error }] = useMutation(DELETE_DECISION);
    const userData = data?.me || {};

    // const handleDeleteDecision = async (_id) => {
    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;
    //     if (!token) {
    //         return false;
    //       }
      
    //     try {
    //         const { data } = await deleteDecision({
    //           variables: { _id },
              
    //         });

    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="chess" style={{ paddingTop: '30vh', paddingBottom: '29vh' }}>
            <Button href="/create">Start a new decision here!</Button>
            <Card.Group style={{paddingTop: '30px'}} centered stackable>
                {userData.decisions?.map((decision) => {
                    return (
                        <Card key={decision._id}>
                            <Card.Content>
                                <Card.Header>{decision.name}</Card.Header>
                                <Card.Description>{decision.decisionText}</Card.Description>
                                {/* <Button
                                    className='btn-block btn-danger'
                                    onClick={() => handleDeleteDecision(decision._id)}
                                    style={{ marginTop: '2vh' }}
                                >
                                    Delete this Decision!
                                </Button> */}
                            </Card.Content>
                        </Card>
                    );
                })}
            </Card.Group>
        </Container>
    );
}

export default Dashboard;
