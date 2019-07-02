import Bold from './Bold';
import Strikethrough from './Strikethrough';
import Underline from './Underline';
import Italic from './Italic';
import Orderedlist from './Orderedlist';
import Unorderedlist from './Unorderedlist';
import Removeformat from './Removeformat';

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
    for(let key in toolbar) {
      let val = toolbar[key];
      if(!val) continue;
      let iconname = key.toLocaleLowerCase();

      // 方法名
      let fnName = iconname.replace(/^[a-zA-Z]/, str => {
        return str.toLocaleUpperCase();
      });

      this[fnName] = this[`_init${fnName}`]({
        desc: val,
        iconname 
      });

      arr.push(this[fnName].html());
    }

  
    this.el.append(arr);
  }

  // 初始化icon
  _initIcon(obj) {
    return `<a class='m-e-a' title="${obj.desc}" href="javascript:;"><span class="m-e-icon icon-${obj.iconname}"></span></a>`
  }

  // 加粗
  _initBold(obj) {
    return new Bold(this).init(obj);
  }

  // 删除线
  _initStrikethrough(obj) {
    return new Strikethrough(this).init(obj);
  }

  // 下划线
  _initUnderline(obj) {
    return new Underline(this).init(obj);
  }

  // 斜体
  _initItalic(obj) {
    return new Italic(this).init(obj);
  }

  // 有序列表
  _initOrderedlist(obj) {
    return new Orderedlist(this).init(obj);
  }

  // 无序列表
  _initUnorderedlist(obj) {
    return new Unorderedlist(this).init(obj);
  }

  // 清除所有格式
  _initRemoveformat(obj) {
    return new Removeformat(this).init(obj);
  }
}

export default Menus;