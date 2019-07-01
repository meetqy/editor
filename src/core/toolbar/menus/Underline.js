import $ from '../../utils/element';
import cmd from '../../command';

// 下划线
class StrikeThrough {
  constructor(selection) {
    this.el;
    this.selection = selection;
  }

  init() {
    this.el = $(`<a href="javascript:;"><span class="m-e-font icon-xiahuaxian"></span></a>`);
    this.listener();

    return this.el;
  }

  // 监听事件
  listener() {
    this.el.on('click', e => {
      cmd('underline').do();
    })
  }
}


export default StrikeThrough;