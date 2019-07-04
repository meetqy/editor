import $ from '../utils/element';
import Selection from '../selection';

// 编辑器
class Editor {
  constructor(Meditor) {
    this.Meditor = Meditor;
    this._autoSaveTimer = '';

    this.selection = new Selection();
  }

  init() {
    let [elContainer, el] = this._initContainer();
    this.el = el;
    this.elContainer = elContainer; // 外层的容器 首次初始化的时候会使用

    this._initBindEvent();
  }

  // 初始化容器
  _initContainer() {
    let { config } = this.Meditor;
    let editorContent = window.localStorage.getItem('editor-content');
    let defalutText = editorContent ? editorContent : config.default_text;
    
    let box = $(`<div style="width: 100%;height: ${config.height - 80}px;overflow: hidden"></div>`);
    let editor = $(`<div class="m-e-editor" style="box-sizing: content-box" contenteditable="true">${defalutText}</div>`);
    
    box.append(editor);

    return [box, editor];
  }

  // 让编辑始终保持 p标签为一行
  _initDefaultP() {
    this.el.append($('<p><br/></p>'))
  }

  // 初始化绑定事件
  _initBindEvent() {
    this.el.on('mouseup', (e) => {
      this.selection.saveRange();
    })

    this.el.on('keydown', (e) => {
      
    })

    this.el.on('keyup', e => {
      if(e.keyCode == 8) {
        if(this.el.isNotChildren()) this._initDefaultP();
      }
      this.Meditor.statusBar.words.setNum();
      this._autoSave();
    })
  }

  _autoSave() {
    let autoSave = this.Meditor.statusBar.autoSave;
    autoSave.setStatus(1);
    this._autoSaveTimer && clearTimeout(this._autoSaveTimer);

    this._autoSaveTimer = setTimeout(() => {
      window.localStorage.setItem('editor-content', this.el.html().innerHTML);
      autoSave.setStatus(0);
    }, 1000)
  }

  /**
   * 返回容器
   * @param {boolean} flag true: 外层容器，初始化的时候用， 其他情况不传入参数
   */
  getEl(flag) {
    return flag ? this.elContainer : this.el;
  }
}

export default Editor;