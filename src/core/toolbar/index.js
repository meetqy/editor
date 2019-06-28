import $ from '../utils/element';

class Toolbar {
  constructor(Meditor) {
    this.Meditor = Meditor;
  }

  init() {
    this.el = this._createContainer();
  }

  _createContainer() {
    return $(`<div class='m-e-toolbar'></div>`);
  }

  getEl() {
    return this.el;
  }
}

export default Toolbar;