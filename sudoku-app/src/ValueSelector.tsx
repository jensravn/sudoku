import { Button } from "@material-ui/core";
import * as React from "react";
import { sudokuValue } from "./types";

const sudokuValues: sudokuValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface IProps {
  valueSelected: (value: sudokuValue) => void;
}

export default class ValueSelector extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <>
        {sudokuValues.map((x, i) => (
          <>
            <Button key={i} onClick={this.props.valueSelected.bind(this, x)}>
              {x}
            </Button>
            {i % 3 === 2 && <br />}
          </>
        ))}
      </>
    );
  }
}
