export class Cell {
  private _top: number;
  private _left: number;

  constructor(top: number, left: number) {
    this._top = top;
    this._left = left;
  }

  get top() {
    return this._top;
  }

  get left() {
    return this._left;
  }
}
