class Element {
  // str 可能值   #id .class node html字符串
  constructor(selector) {
    this.el = this._init(selector);
  }

  _init(selector) {
    if(!selector) {
      return;
    }

    if(typeof selector === 'string') {
      if(selector.match(/^\./)) {
        return document.querySelectorAll(selector);
      } else if(selector.match(/^#/)) {
        return document.querySelector(selector)
      } else {
        let dom = this.stringToElement(selector);
        if(dom.length && dom.length === 1) {
          return dom[0]
        }
      }
    } else {
      return selector;
    }
  }

  html() {
    return this.el;
  }

  // 追加元素  selector  string || node || Element
  append(selector) {
    if(selector instanceof Element) {
      selector = selector.html()
    }

    if(typeof selector === 'string') {
      this.el.innerHTML += selector;
    } else {
      this.el.appendChild(selector);
    }

    return this;
  }

  // html字符串转node
  stringToElement(str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.children;
  }

  // 增加className
  addClass(className) {
    if(!className) return;
    
    if(this.el instanceof NodeList || this.el instanceof HTMLCollection) {
      return false;
    }

    let classNameArr = this.el.className ? this.el.className.split(/\s/) : []
    classNameArr.push(className);
    this.el.className = classNameArr.join(' ');
    return this;
  }

  // 设置id  没有传入id 返回当前el的id
  id(id) {
    if(this.el instanceof NodeList || this.el instanceof HTMLCollection) {
      return ;
    }

    if(!id) return this.el.id;

    this.el.id = id;
    return this;
  }

  // 设置css styles object
  css(styles) {
    if(!styles || typeof styles !== 'object' || !Object.keys(styles).length) {
      return;
    }
    let {el} = this;

    for(let key in styles) {
      let val = styles[key];
      el.style[key] = val;
    }

    return this;
  }
}


export default function(str) {
  return new Element(str);
}