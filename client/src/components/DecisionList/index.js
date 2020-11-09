import React from 'react';
import { Link } from 'react-router-dom'

const DecisionList = ({ decisions, title }) => {
  if (!decisions.length) {
    return <h3>No Decisions Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {decisions &&
        decisions.map(decision => (
          <div key={decision._id} >
            <p>
              <Link
                to={`/profile/${decision.username}`}
                style={{ fontWeight: 700 }}
              >
                  {decision.username}
              </Link>{' '}
              decision on {decision.createdAt}
            </p>
            <div>
              {/* <Link to={`/decision/${decision._id}`}>
                <p>{decision.decisionText}</p>
                <p className="mb-0">
                  Reactions: {decision.reactionCount} || Click to{' '}
                  {decision.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default DecisionList;