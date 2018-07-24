import * as React from "react";
import "./Board.css";
import { Cell } from "./Cell";
import { InitialBoard } from "./InitialBoard";
import { sudokuValue } from "./types";

export interface IBoardState {
  board: sudokuValue[];
}

export default class Board extends React.Component<{}, IBoardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      board: InitialBoard
    };
  }

  public render() {
    const { board } = this.state;
    return (
      <div className="board">
        {board.map((x, i) => (
          <Cell key={i} value={x} valueSelected={this.setValue.bind(this, i)} />
        ))}
      </div>
    );
  }

  private setValue = (i: number, value: sudokuValue) => {
    const board = [...this.state.board];
    board[i] = value;
    this.setState({ board });
  };
}
