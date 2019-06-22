import ReplaceSelect from './ReplaceSelect';

class EditorBox {
  constructor(MEditor) {
    this.MEditor = MEditor;
    this._Rs = ReplaceSelect;

    this._el = this._init();
    this.listenEl();
  }

  _init() {
    let editorBox = document.createElement('div');
    editorBox.classList.add('m-e-box');
    let container = document.createElement('div');
    container.classList.add('m-e-container');
    container.setAttribute('contenteditable', true);
    container.innerHTML = '<p><br/></p>';
    editorBox.appendChild(container);

    this.MEditor._el.appendChild(editorBox);

    return container;
  }

  // 对el进行事件监听
  listenEl() {
    let { _el } = this;
    _el.addEventListener('keydown', e => {
      if(!_el.innerHTML) {
        _el.innerHTML += '<p><br/></p>'
      }
    })  

    _el.addEventListener('mousedown', e => {

    })

    _el.addEventListener('mouseup', e => {
      let select = getSelection();
      if(!select.toString()) return;

      this._Rd(select).h1();
    })
  }
}

export default EditorBox;