import * as React from "react";
import { sudokuValue } from "../types";
import "./Board.css";
import { Cell } from "./Cell";

export interface IBoardProps {
  board: sudokuValue[];
  onSetCell: (id: number, value: sudokuValue) => void;
}

export default class Board extends React.Component<IBoardProps, {}> {
  constructor(props: IBoardProps) {
    super(props);
  }

  public render() {
    const { board } = this.props;
    return (
      <div className="board">
        {board.map((x, i) => (
          <Cell key={i} value={x} valueSelected={this.setValue.bind(this, i)} />
        ))}
      </div>
    );
  }

  private setValue = (i: number, value: sudokuValue) => {
    this.props.onSetCell(i, value)
    // const board = [...this.state.board];
    // board[i] = value;
    // this.setState({ board });
  };
}
