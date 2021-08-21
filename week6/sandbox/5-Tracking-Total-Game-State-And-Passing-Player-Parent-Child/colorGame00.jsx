const Square = ({id, player, newState}) => {
  const [status, setStatus] = React.useState(null);
  const xo = ["0", "X"];
  const [color, setColor] = React.useState('green');
  const palette = ['red', 'green', 'blue'];
  const getRandomColor = () => palette[Math.floor(Math.random() * 3)];

  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Squares ${id}`);
  });

  return (
    <button onClick={(e) => {
        let col = getRandomColor();
        setColor(col);
        let nextPlayer = newState({id:id, color:col});
        setStatus(nextPlayer);
        e.target.style.background = color;
        }}>
      <h1>{xo[status]}</h1>
    </button>
  );

}

const Board = () => {
  const [player, setPlayer ] = React.useState(1);
  let status = `Player ${player}`;
  const [state, setState] = React.useState([]);

  const newState = ob => {
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    setState([...state, ob]);
    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextPlayer}`;
    return nextPlayer;
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }
    return (
      <div
        className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div id="info">
        </div>
      </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
