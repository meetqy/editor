import $ from '../../utils/element';
import cmd from '../../command';

class Bold {
  constructor(selection) {
    this.bold;
    this.selection = selection;
  }

  init() {
    this.bold = $('<a style="font-weight: bold" href="javascript:;" id="m-e-toolbar-bold">B</a>');
    this.listener();


    return this.bold;
  }

  // 监听事件
  listener() {
    this.bold.on('click', e => {
      cmd('bold').do();
    })
  }
}


export default Bold;