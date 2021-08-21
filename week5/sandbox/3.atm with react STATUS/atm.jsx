const ATMDeposit = ({ onChange }) => {
    return (
        <label className="label huge">
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit" value="Submit"></input>
        </label>
    );
};

const Account = () => {
    let transactionValue = 0;
    const [currentBalance, setCurrentBalance] = React.useState(0);
    let status = `Account Balance $${currentBalance}`;
    console.log('Account Rendered');
    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionValue = Number(event.target.value);
    };
    const handleSubmit = () => {
        setCurrentBalance(currentBalance + transactionValue);
        status = `Account Balance $${currentBalance}`;
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
        </form>
    );
};


ReactDOM.render(<Account />, document.getElementById('root'));