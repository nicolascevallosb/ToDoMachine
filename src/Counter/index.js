import React from 'react';
import './Counter.css';
import { ItemContext } from '../ItemContext';

function Counter({ total, completed }) {
    const {
        completedTasks,
        totalTasks,
    } = React.useContext(ItemContext);

    return(
        <h1 className='counter'>
            <span>{completedTasks}</span>/<span>{totalTasks}</span> tasks completed!
        </h1>
    );
}

export { Counter };