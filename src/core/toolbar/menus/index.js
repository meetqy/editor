import Bold from './Bold';

class Menus  {
  constructor(Toolbar) {
    this.el = Toolbar.el;
    this.selection = Toolbar.selection;
  }

  init() {
    this._initBold();
  }

  _initBold() {
    this.bold = new Bold(this.selection).init();
    this.el.append(this.bold);
  }
}

export default Menus;