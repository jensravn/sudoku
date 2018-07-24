import * as React from "react";
import "./Cell.css";

type sudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

const Cell: React.SFC<{
  value: sudokuValue;
  cellClicked: (e: any) => void;
}> = props => (
  <div className="cell" onClick={props.cellClicked}>
    {props.value}
  </div>
);

export default Cell;
