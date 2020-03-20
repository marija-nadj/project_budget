import React, { useContext } from 'react';
import { GlobalContext } from '../context/MainState';

export const Cost = ({ cost }) => {
    const { deleteCost } = useContext(GlobalContext);
    const sign = cost.amount < 0 ? '-' : '+';
    return (
        <li className={cost.amount < 0 ? "actual" : "budget"}>
            {cost.text}<span>{sign}${Math.abs(cost.amount)}</span><button onClick={()=>deleteCost(cost.id)} className="delete-btn">x</button>
            </li>
    )
}
