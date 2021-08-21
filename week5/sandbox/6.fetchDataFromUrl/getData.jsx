function App() {
    const { Container } = ReactBootstrap;
    const { useState, useEffect } = React;
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState("MIT");
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=MIT");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("fetchin data...")
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
                console.log(result);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return (
        <Container>
            <form
                onSubmit={event => {
                    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
                    event.preventDefault();
                }}>
                <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
                <button type='submit'>
                    Search
                </button>
            </form>
            {isError && <div>Something went wrong...</div>}
            {isLoading ? (<div>Loading...</div>) : (
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

ReactDOM.render(<App />, document.getElementById("root"));