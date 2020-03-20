import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    costs : [
        { id: 1, text: 'Project Budget', amount: 90000 },
        { id: 2, text: 'Planning the project', amount: -2700 },
        { id: 3, text: 'Purchasing servers', amount: -780},
        { id: 4, text: 'Server Costs', amount: -16000 },
        { id: 5, text: 'Customizing the new system', amount: -19900},
        { id: 6, text: 'Testing the system', amount: -11200},
        { id: 7, text: 'Transferring the data to the new system', amount: -4500},
        { id: 8, text: 'Measuring the project', amount: -4500},
        { id: 9, text: 'Managing the project', amount: -16500},
        { id: 10, text: 'Analyzing the current system', amount: -3600}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

function deleteCost (id) {
    dispatch ({
        type: 'DELETE_COST',
        payload: id
    });
}
    function addCost(cost) {
        dispatch({
            type: 'ADD_COST',
            payload: cost
        });
    }

    return (<GlobalContext.Provider value={{
        costs:state.costs,
        deleteCost,
        addCost
    }}>
        {children}
    </GlobalContext.Provider>);
}