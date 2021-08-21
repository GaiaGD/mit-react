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
    let currentBalance = 0; // Account total at Bank
    let status = "Account Balance $0";

    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionValue = Number(event.target.value);
    };
    const handleSubmit = () => {
        currentBalance += transactionValue;
        status = `Account Balance $${currentBalance}`;
        document.getElementById('total').innerHTML = status;
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