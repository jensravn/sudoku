import { connect } from "react-redux";
import { setCell } from "../actions";
import Board, { IBoardProps } from "../components/Board";
import { sudokuValue } from "../types";

const mapStateToProps = (state: any) => ({
  board: state.board
});

const mapDispatchToProps = (dispatch: any, ownProps: IBoardProps) => ({
  onSetCell: (id: number, value: sudokuValue) => dispatch(setCell(id, value))
});

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Board as any);
