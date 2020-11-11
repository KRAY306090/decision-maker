import React from 'react';

import { Redirect, useParams } from 'react-router-dom';
import DecisionList from '../components/DecisionList';
// import FriendList from '../components/FriendList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
// import { ADD_FRIEND } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Grid, Card, Button } from 'semantic-ui-react';

const items = [
    {
        header: 'Should I go to Hawaii?',
        description:
            'Here are some pros and cons...',
        meta: 'Active May 3rd, 2016',
    },
    {
        header: 'Should I change careers?',
        description:
            'Some more pros and cons...',
        meta: 'Active November 9th, 2020',
    },
    {
        header: 'Should I go to Hawaii?',
        description:
            'Here are some pros and cons...',
        meta: 'Active May 3rd, 2016',
    },
    {
        header: 'Should I change careers?',
        description:
            'Some more pros and cons...',
        meta: 'Active November 9th, 2020',
    },
    {
        header: 'Should I go to Hawaii?',
        description:
            'Here are some pros and cons...',
        meta: 'Active May 3rd, 2016',
    },
    {
        header: 'Should I change careers?',
        description:
            'Some more pros and cons...',
        meta: 'Active November 9th, 2020',
    },
    {
        header: 'Should I go to Hawaii?',
        description:
            'Here are some pros and cons...',
        meta: 'Active May 3rd, 2016',
    },
    {
        header: 'Should I change careers?',
        description:
            'Some more pros and cons...',
        meta: 'Active November 9th, 2020',
    },
    {
        header: 'Should I go to Hawaii?',
        description:
            'Here are some pros and cons...',
        meta: 'Active May 3rd, 2016',
    },
    {
        header: 'Should I change careers?',
        description:
            'Some more pros and cons...',
        meta: 'Active November 9th, 2020',
    }
]

const Dashboard = () => {
    // const { username: userParam } = useParams();
    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam }
    // });
    // const user = data?.me || data?.user || {};
    // // const [addFriend] = useMutation(ADD_FRIEND)
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to="/dashboard" />
    // }
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this page.
    //         </h4>
    //     )
    // }
    // const handleClick = async () => {
    //     // try {
    //     //   await addFriend({
    //     //     variables: { id: user._id }
    //     //   })
    //     // } catch (e) {
    //     //   console.error(e)
    //     // }
    // }

    return (
        <Container className="chess" style={{ paddingTop: '30vh', paddingBottom: '29vh' }}>
            <Button href="/create">Start a new decision here!</Button>
            <Card.Group style={{paddingTop: '30px'}} centered stackable items={items}>

            </Card.Group>
        </Container>
    );
}

export default Dashboard;

