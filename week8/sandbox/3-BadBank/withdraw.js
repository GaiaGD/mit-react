function Withdraw() {
    const ctx = React.useContext(UserContext);
    return (
        <h1>Withdraw -- {JSON.stringify(ctx)}</h1>
    );
}