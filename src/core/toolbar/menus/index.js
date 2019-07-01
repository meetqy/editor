import Bold from './Bold';
import Strikethrough from './Strikethrough';
import Underline from './Underline';

class Menus  {
  constructor(Toolbar) {
    this.config = Toolbar.Meditor.config;
    this.el = Toolbar.el;
    this.selection = Toolbar.selection;
  }

  init() {
    let { toolbar } = this.config;

    // 通过文档碎片的方式添加节点 减少dom操作次数
    let arr = [];
    for(let val in toolbar) {
      let name = val.replace(/^[a-zA-Z]/, str => {
        return str.toLocaleUpperCase();
      });
      this[name] = this[`_init${name}`]();
      arr.push(this[name].html());
    }
  
    this.el.append(arr);
  }

  // 初始化icon
  _initIcon(iconname) {
    return `<a class='m-e-a' href="javascript:;"><span class="m-e-font ${iconname}"></span></a>`
  }

  _initBold() {
    return new Bold(this).init();
  }

  _initStrikethrough() {
    return new Strikethrough(this).init();
  }

  _initUnderline() {
    return new Underline(this).init();
  }
}

export default Menus;