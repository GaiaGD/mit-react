function Products(){
    const ctx = React.useContext(UserContext);
    ctx.users.push('Another product added');
    return (
        <div>
            <h3>Products Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}