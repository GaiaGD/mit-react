function Spa() {
    return (
        <>
            <HashRouter>
            <h1>Welcome to Bad Bank</h1>
                <NavBar />
                <UserContext.Provider value={{users: [{name:'Gaia', email:'gaia.dg@gmail.com', password: 'secret', balance:100}] }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/createaccount/" exact component={CreateAccount} />
                    <Route path="/login/" exact component={Login} />
                    <Route path="/deposit/" exact component={Deposit} />
                    <Route path="/withdraw/" exact component={Withdraw} />
                    <Route path="/balance/" exact component={Balance} />
                    <Route path="/alldata/" exact component={AllData} />
                </UserContext.Provider>
            </HashRouter>
        </>
    );
}

ReactDOM.render(
    <Spa />,

    document.getElementById('root')
);
