import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='black f3'>
                {`${name}, Your current Entry count is...`}
            </div>
            <div className='black f1'>
                {`${entries}`}
            </div>
        </div>
    );
}
export default Rank;

// this displays the user's current rank
// simple tachyons for styling
// will make it dynamic later on