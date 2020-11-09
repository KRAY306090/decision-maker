import React from 'react';
import { Link } from 'react-router-dom';

import { Redirect, useParams } from 'react-router-dom';
import DecisionList from '../components/DecisionList';
// import FriendList from '../components/FriendList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
// import { ADD_FRIEND } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/react-hooks';

const Dashboard = () => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};
    // const [addFriend] = useMutation(ADD_FRIEND)
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/dashboard" />
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page.
            </h4>
        )
    }
    const handleClick = async () => {
        // try {
        //   await addFriend({
        //     variables: { id: user._id }
        //   })
        // } catch (e) {
        //   console.error(e)
        // }
    }

    return (
        <main>
            <div>
                <div>
                    <h2>
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                    </h2>
                    {userParam && (
                        <button onClick={handleClick}>
                            Add Friend
                        </button>
                    )}
                </div>

                <div>
                    <div>
                        <DecisionList decisions={user.decisions} title={`${user.username}'s decisions...`} />
                    </div>

                    {/* <div>
                        <FriendList
                            username={user.username}
                            friendCount={user.friendCount}
                            friends={user.friends}
                        />
                    </div> */}
                </div>
            </div>
            <Link to="/create">Start a new decision here!</Link>
        </main>
    );
}

export default Dashboard;

