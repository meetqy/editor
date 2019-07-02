import Bold from './Bold';
import StrikeThrough from './StrikeThrough';
import Underline from './Underline';
import Italic from './Italic';
import OrderedList from './OrderedList';
import UnorderedList from './UnorderedList';
import RemoveFormat from './RemoveFormat';
import JustifyCenter from './JustifyCenter';
import JustifyRight from './JustifyRight';
import JustifyLeft from './JustifyLeft';
import FontSize from './FontSize';

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
      let lowerKey = key.toLowerCase(); // key转换成小写

      // 方法名
      let fnName = lowerKey
        .replace(/^(\w)/, str => {
          return str.toUpperCase();
        })
        .replace(/_(\w)/g, (a, b) => {
          return b.toUpperCase();
        })


      this[fnName] = this[`_init${fnName}`]({
        desc: val,
        iconname: lowerKey.replace(/_/g, '-') 
      });

      arr.push(this[fnName].html());
    }

  
    this.el.append(arr);
  }

  // 初始化icon
  _initIcon(obj) {
    return `<a class='m-e-a m-e-${obj.iconname}' title="${obj.desc}" href="javascript:;"><span class="m-e-icon icon-${obj.iconname}"></span></a>`
  }

  _initFontSizeUp(obj) {
    return new FontSize(this).init(obj, 'up');
  }

  _initFontSizeDown(obj) {
    return new FontSize(this).init(obj, 'down');
  }

  // 居中对齐
  _initJustifyCenter(obj) {
    return new JustifyCenter(this).init(obj);
  }

  // 左对齐
  _initJustifyRight(obj) {
    return new JustifyRight(this).init(obj);
  }

  // 右对齐
  _initJustifyLeft(obj) {
    return new JustifyLeft(this).init(obj);
  }

  // 加粗
  _initBold(obj) {
    return new Bold(this).init(obj);
  }

  // 删除线
  _initStrikeThrough(obj) {
    return new StrikeThrough(this).init(obj);
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
  _initOrderedList(obj) {
    return new OrderedList(this).init(obj);
  }

  // 无序列表
  _initUnorderedList(obj) {
    return new UnorderedList(this).init(obj);
  }

  // 清除所有格式
  _initRemoveFormat(obj) {
    return new RemoveFormat(this).init(obj);
  }
}

export default Menus;