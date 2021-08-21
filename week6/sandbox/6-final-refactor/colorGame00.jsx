function checkWinner(state) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (state[a] == state[b] && state[a] == state[c] && state[a])
      return state[a];
  }
  return null;
};

const Square = ({id, player, newState}) => {
  const [status, setStatus] = React.useState(null);
  const XorO = ["0", "X"];
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
        console.log(nextPlayer);
        let nextPlayer = newState({id:id, color:col});
        console.log(nextPlayer);
        setStatus(nextPlayer);
        e.target.style.background = color;
        }}>
      <h1>{XorO[status]}</h1>
    </button>
  );

}

const Board = () => {
  const [player, setPlayer ] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));

  let status = `Player ${player}`;
  let winner = checkWinner(state);

  if(winner != null) status = `Player ${winner} wins`;

  const newState = idOfSquare => {
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state);

    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);

    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextPlayer}`;
    return thePlayer;
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
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info">
          <h1>{status}</h1>
        </div>
      </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
