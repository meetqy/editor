import $ from '../utils/element';
import Menus from './menus/index';
import Selection from '../selection';

class Toolbar {
  constructor(Meditor) {
    this.Meditor = Meditor;
    this.selection = new Selection();
  }

  init() {
    this.el = this._createContainer();

    this._initMenus();
  }

  _initMenus() {
    this.menus = new Menus(this);
    this.menus.init();
  }

  _createContainer() {
    return $(`<div class='m-e-toolbar'></div>`);
  }

  getEl() {
    return this.el;
  }
}

export default Toolbar;