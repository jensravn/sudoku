import { Popover } from "@material-ui/core";
import * as React from "react";
import "./Cell.css";
import { sudokuValue } from "./types";
import ValueSelector from "./ValueSelector";

interface IProps {
  value: sudokuValue;
  valueSelected: (value: sudokuValue) => void;
}

interface IState {
  anchorEl: EventTarget & HTMLElement | undefined;
}

export class Cell extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { anchorEl: undefined };
  }

  public handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  public handleClose = () => {
    this.setState({ anchorEl: undefined });
  };

  public valueSelected = (value: sudokuValue) => {
    this.handleClose();
    this.props.valueSelected(value);
  };

  public render() {
    const { value } = this.props;
    const { anchorEl } = this.state;

    return (
      <>
        <div className="cell" onClick={this.handleClick}>
          {value}
        </div>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            horizontal: "center",
            vertical: "center"
          }}
          transformOrigin={{
            horizontal: "center",
            vertical: "center"
          }}
        >
          <ValueSelector valueSelected={this.valueSelected} />
        </Popover>
      </>
    );
  }
}
