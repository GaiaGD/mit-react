// Create a class for the element
function Book({data}) {

    return (    
            <div className="card">
              <h5 className="card-header">{data.title}</h5>
              <div className="card-body">
                <h5>{data.subtitle}</h5>
                    <p className="card-text">
                    <table className="table">
                        <tr>
                            <td className="text-success font-weight-bold">Title:</td>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Subtitle:</td>
                            <td>{data.subtitle}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Author:</td>
                            <td>{data.author}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Publisher:</td>
                            <td>{data.publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Description:</td>
                            <td>{data.description}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
    );    

}