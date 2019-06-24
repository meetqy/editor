import ReplaceSelect from './ReplaceSelect';
import eventFn from './eventfn';

class EditorBox {
  constructor(MEditor) {
    this.md_el = MEditor._el;
    this._Rs = ReplaceSelect;

    this._el = this._init();
    this._select = null;  // 当前选中文本的信息
    this.listenEl();
  }

  _init() {
    let editorBox = document.createElement('div');
    editorBox.classList.add('m-e-box');
    let container = document.createElement('div');
    container.classList.add('m-e-container');
    container.setAttribute('contenteditable', true);
    // container.innerHTML = '<p><br/></p>';
    container.innerHTML = '<p>这是测试（测试加粗）</p>';
    editorBox.appendChild(container);

    this.md_el.appendChild(editorBox);

    return container;
  }

  getSelect() {
    return this._select;
  }

  // 对el进行事件监听
  listenEl() {
    let { _el } = this;
    _el.addEventListener('keyup', eventFn._keyup.bind(this));

    _el.addEventListener('mouseup', eventFn._mouseup.bind(this));
  }
}

export default EditorBox;