import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input 
                    type='text' 
                    placeholder='Enter text...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br/>
                    (negative -  expense, positive - income)
                </label>
                <input 
                    type ='number' 
                    placeholder='Enter Amount...'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <button type= 'submit' className='btn'>Add Transaction</button>
        </form>
    </>
  )
}
