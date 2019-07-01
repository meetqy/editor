import $ from '../../utils/element';
import cmd from '../../command';

// 删除线
class Strikethrough {
  constructor(selection) {
    this.el;
    this.selection = selection;
  }

  init() {
    this.el = $(`<a href="javascript:;"><span class="m-e-font icon-shanchuxian"></span></a>`);
    this.listener();

    return this.el;
  }

  // 监听事件
  listener() {
    this.el.on('click', e => {
      cmd('strikeThrough').do();
    })
  }
}


export default Strikethrough;