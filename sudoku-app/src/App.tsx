import * as React from "react";
import Board from "./Board";

const board: Array<{}> = [];
for (let i = 0; i < 81; i++) {
  board.push(i);
}

class App extends React.Component {
  public render() {
    return <Board board={board} />;
  }
}

export default App;
