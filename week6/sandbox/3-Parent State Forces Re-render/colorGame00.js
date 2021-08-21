const Square = ({id, player}) => {

  const [color, setColor] = React.useState('green');
  const palette = ['red', 'green', 'blue'];
  const getRandomColor = () => palette[Math.floor(Math.random() * 3)];
  
  React.useEffect(() => {
    document.title = `You clicked ${id} times`;
  });

  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Squares ${id}`);
  });

  return (
    <button onClick={(e) => {
        setColor(getRandomColor());
        e.target.style.background = color;
        }}>
      <h1>{id}</h1>
    </button>
  );

}

const Board = () => {
  const [player, setPlayer ] = React.useState(1);
  let status = `Player ${player}`;

  const [mounted, setMounted] = React.useState(true);

  const [random, setRandom] = React.useState(0);
  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>;
  }
    return (
      <div
        className="game-board">
        <div className="grid-row">
          {mounted && renderSquare(0)}
          {mounted && renderSquare(1)}
          {mounted && renderSquare(2)}
        </div>
        <div id="info">
          <button onClick={toggle}>Show/Hide Row</button>
          <button onClick={reRender}>reRender</button>
          <h1>Turn off player {player}</h1>
        </div>
      </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
