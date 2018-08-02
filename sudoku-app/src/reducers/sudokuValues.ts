import { InitialBoard } from "../InitialBoard";

const board = (state = InitialBoard, action: any) => {
  switch (action.type) {
    case "SET_CELL":
      return state.map((cell, i) => (i === action.id ? action.value : cell));
    default:
      return state;
  }
};

export default board;
