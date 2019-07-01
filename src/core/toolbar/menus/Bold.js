import $ from '../../utils/element';
import cmd from '../../command';

class Bold {
  constructor(Menus) {
    this.el;
    this.selection = Menus.selection;
    this._initIcon = Menus._initIcon;
  }

  init() {
    this.el = $(`<a class='m-e-a' href="javascript:;"><span class="m-e-font icon-B"></span></a>`);
    this.listener();

    return this.el;
  }

  // 监听事件
  listener() {
    this.el.on('click', e => {
      cmd('bold').do();
    })
  }
}


export default Bold;