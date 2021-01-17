import React,{useState}from 'react';

const AddTransaction = () =>{
    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0);
    return(
        <div>
            <h3>Add new Transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor= "text">text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="enter text"/>
                </div>
                <div className= "form-control">
                    <label htmlFor="amount">Amount<br/>
                    (negative - expence, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter amount...'/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction;