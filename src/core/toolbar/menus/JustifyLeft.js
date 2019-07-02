import $ from '../../utils/element';
import cmd from '../../command';

class JustifyLeft {
  constructor(Menus) {
    this.el;
    this.selection = Menus.selection;
    this._initIcon = Menus._initIcon;

  }

  init(obj) {
    this.el = $(this._initIcon(obj));
    this.listener();

    return this.el;
  }

  // 监听事件
  listener() {
    this.el.on('click', e => {
      cmd('justifyLeft').do();
    })
  }
}


export default JustifyLeft;