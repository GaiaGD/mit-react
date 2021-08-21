const Square = ({id, player}) => {
const [click, setClick] = React.useState(false);

  return (
    <button onClick={() => {
        setClick(true);
        console.log(click);
        }}>
      <h1>{player}</h1>
    </button>
  );
}

const Board = () => {
const [player, setPlayer ] = React.useState(1);

let status = `Player ${player}`;
function renderSquare(i) {
  return <Square id={i} player={player}></Square>;
}
  return (
    <div
      className="game-board">
      <div className="grid-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div id="info">
        <div className="rid-row"></div>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
