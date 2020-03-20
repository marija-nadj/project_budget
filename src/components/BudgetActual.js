import React, { useContext } from 'react';
import { GlobalContext } from '../context/MainState';

export const BudgetActual = () => {
    const { costs } = useContext (GlobalContext);

    const amounts = costs.map(cost => cost.amount);

    const budget = amounts
    .filter (item => item >0)
    .reduce ((acc,item) => (acc+=item),0)
    .toFixed(2);

    const actual = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc+=item),0) *-1
    ). toFixed(2);

    return (
        <div className="budg-act-container">
            <div>
                <h4>Budget</h4>
                <p className="money budget">{budget}</p>
            </div>
            <div>
                <h4>Actual</h4>
                <p className="money actual">{actual}</p>
            </div>
        </div>
    )
}
