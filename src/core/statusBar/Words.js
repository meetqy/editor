import $ from '../utils/element';

// 字数统计
class Words {
  constructor(editor) {
    this.editor = editor;
  }

  init() {
    this.el = $(`<span class='m-e-words'>字数：${this.getNum()}</span>`);
    return this.el;
  }

  getNum() {
    let text = this.editor.el.text().replace(/\s|\n/g, '');
    return text ? text.length : 0;
  }

  setNum() {
    this.el.text(`字数：${this.getNum()}`);
  }
}

export default (function() {
  let words;
  return function(editor) {
    if(!words) {
      words = new Words(editor);
    }
    return words;
  }
})()