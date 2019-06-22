/**
 * 替换当前选中的节点
 * @select window.getSelection()获取的信息
 */
class ReplaceSelect {
  constructor(select) {
    this._el = select.baseNode.parentNode; 
    this.parentNode = this._el.parentNode; // 父级节点
    this.text = select.toString();       // 替换节点文本
  }

  /**
   * 创建需要替换的节点
   * h1,h2,h3,h4,h5,h6,p,div  用此方法
   */
  createReplaceDom(str) {
    let dom = document.createElement(str);
    dom.innerText = this.text;
    dom.classList.add(`m-e-${str}`);
    return dom;
  }

  h1() {
    let rcdom = this.createReplaceDom('h1');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  h2() {
    let rcdom = this.createReplaceDom('h2');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  h3() {
    let rcdom = this.createReplaceDom('h3');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  h4() {
    let rcdom = this.createReplaceDom('h4');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  h5() {
    let rcdom = this.createReplaceDom('h5');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  h6 () {
    let rcdom = this.createReplaceDom('h6');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  p() {
    let rcdom = this.createReplaceDom('p');
    this.parentNode.replaceChild(rcdom, this._el);
  }

  div() {
    let rcdom = this.createReplaceDom('div');
    this.parentNode.replaceChild(rcdom, this._el);
  }
}

// 导出工厂函数
export default function(dom) {
  return new ReplaceSelect(dom);
}