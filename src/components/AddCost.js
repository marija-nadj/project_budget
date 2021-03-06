import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/MainState';

export const AddCost = () => {
    const [text, setText ] = useState('');
    const [amount, setAmount] = useState (0);

    const { addCost } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

    const newCost = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
        }
        addCost(newCost);
    }
    return (
        <>
        <h3>Update Project Budget</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br/>
                </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..."/>
            </div>
                <button className="btn">Update</button>
        </form>
        </>
    )
}
