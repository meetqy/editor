// 选中区域（range），操作方法
class Selection {
  constructor() {
    this.range = null;
  }

  // 获取range
  getRange() {
    // TODO: 考虑要不要加判断
    // if(!this.range) {
    //   return this.saveRange();
    // }
    return this.range;
  }

  // 保存range
  saveRange() {
    let selection = window.getSelection();
    if(selection.rangeCount !== 1) return ; // 不支持多选
    let range = selection.getRangeAt(0);
    if(range.collapsed) return ; // 没有选中任何区域
    this.range = range;
    return this.range;
  }

  addRange(range) {
    // console.log(this.range);
    // this.range = range;
    // this.renewRange();
  }

  // 回显选中的range
  renewRange() {
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(this.range);
  }

  // 选中的片段
  getSelectFragment() {
    if(!this.range) return ;
    let fragment = this.range.cloneContents();
    
    return Array.apply(this, fragment.childNodes);
  }

  getStartContainer() {
    let startElement = this.range.startContainer;
    if(startElement.nodeType === 3) {
      return startElement.parentNode
    } else {
      return startElement;
    }
  }

  getEndContainer() {
    let endElement = this.range.endContainer;
    if(endElement.nodeType === 3) {
      return endElement.parentNode
    } else {
      return endElement;
    }
  }
}


// 使用单例 多个类中引入必须使用单例 
export default (function() {
  let se;
  return function() {
    if(!se) {
      se = new Selection();
    }

    return se;
  }
})()