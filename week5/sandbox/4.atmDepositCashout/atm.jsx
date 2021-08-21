const Account = () => {
    let transaction = 0;
    const [currentBalance, setCurrentBalance] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    let status = `Account Balance $${currentBalance}`;
    const handleChange = event => {
        if (!isDeposit && Number(event.target.value > currentBalance)) {
            return alert ("You don't have enough funds");
        };
        transaction = (Number(event.target.value));
        console.log(isDeposit);
    };
    const handleSubmit = () => {
        console.log(isDeposit);
        let newBalance = isDeposit ? currentBalance + transaction : currentBalance - transaction;
        setCurrentBalance(newBalance);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <button onClick={()=> setIsDeposit(true)}>Deposit</button>
            <button onClick={()=> setIsDeposit(false)}>Cash Back</button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
        </form>
    );
};

const ATMDeposit = ({ onChange, isDeposit }) => {
    const transactionType = ['Deposit', "Cash Back"];
    console.log(transactionType[Number(!isDeposit)]);
    return (
        <label className="label huge">
            <h3>{transactionType[Number(!isDeposit)]}</h3>
            <input type="number" onChange={onChange}></input>
            <input type="submit" value="Submit"></input>
        </label>
    );
};

ReactDOM.render(<Account />, document.getElementById('root'));