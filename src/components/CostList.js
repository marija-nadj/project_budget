import React, { useContext } from 'react';
import { GlobalContext } from '../context/MainState';
import { Cost } from './Cost';

export const CostList = () => {
    const { costs } = useContext(GlobalContext);
    return (
        <>
            <h3>Project Summary</h3>
            <ul className="list">
                {costs.map(cost => (<Cost key={cost.id} cost={cost}/>))}
            </ul>
        </>
    )
}
