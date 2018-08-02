import { sudokuValue } from "../types";

export const setCell = (id: number, value: sudokuValue) => ({
  id,
  type: "SET_CELL",
  value
});
