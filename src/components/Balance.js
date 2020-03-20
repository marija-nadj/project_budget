import React, { useContext } from 'react';
import { GlobalContext } from '../context/MainState';

export const Balance = () => {
    const { costs } = useContext(GlobalContext);
    
    const amounts = costs.map(cost => cost.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    return (
        <>
        <h4>Balance</h4>
        <h1>${total}</h1>        
        </>
    )
}

