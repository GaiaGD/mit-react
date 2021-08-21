function App() {
    const {useState, useEffect} = React;
    const { Container } = ReactBootstrap ;
    const [data, setData] = React.useState({ hits: [] });
    const [url, setUrl] = React.useState("http://127.0.0.1:5500/data.json");
    const [isLoading, setIsLoading] = React.useState(false);
    const [query, setQuery] = React.useState("");

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(url);
            setData(result.data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <input type="text" value={query} onChange={() => setQuery(event.target.value)} />
            <button type='button' onClick={() => setUrl("http://127.0.0.1:5500/data.json")}>
                Search
            </button>
            {isLoading ? ( <div>Loading...</div> ) : (
                <ul>
                    {data.hits.map(item => (
                        <li key='objectID'>
                            <a href={item.url} target="_blank">{item.title} {item.instock}</a>
                        </li>
                    ))
                    }
                </ul>
            )}
        </Container>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));