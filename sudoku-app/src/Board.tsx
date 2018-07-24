import * as React from "react";
import "./Board.css";
import Cell from "./Cell";

export interface IBoardProps {
  board: Array<{}>;
}

export default class Board extends React.Component<IBoardProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { board } = this.props;
    return (
      <div className="board">
        {board.map((x, i) => (
          <Cell key={i} value={1} cellClicked={this.openOptionsDialog} />
        ))}
      </div>
    );
  }

  private openOptionsDialog = () => {
    alert("Not implemented");
  };
}
