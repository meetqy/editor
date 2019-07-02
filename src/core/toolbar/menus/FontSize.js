import $ from '../../utils/element';
import cmd from '../../command';

class FontSize {
  constructor(Menus) {
    this.el;
    this.selection = Menus.selection;
    this._initIcon = Menus._initIcon;
    this.number = 3;
  }

  init(obj, type) {
    let el = $(this._initIcon(obj));
    this[`el_${type}`] = el
    this.listener(type);

    return el;
  }

  // 监听事件
  listener(type) {
    let el = this[`el_${type}`];
    el.on('click', e => {
      let className = el.className();
      if(className.indexOf('m-e-font-size-up') > -1) { // 字体+
        this.number < 7 && this.number++;
      } else { // 字体 -
        this.number > 1 && this.number--;
      }

      cmd('fontSize', this.number).do();
    })
  }
}


export default (function() {
  let fontSize;
  return function(menus) {
    if(!fontSize) {
      fontSize = new FontSize(menus);
    }

    return fontSize;
  }
})();