function Deposit() {
    const ctx = React.useContext(UserContext);
    return (
        <h1>Deposit -- {JSON.stringify(ctx)}</h1>
    );
}