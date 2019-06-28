import $ from '../utils/element';

// 编辑器
class Editor {
  constructor(Meditor) {
    this.Meditor = Meditor;
  }

  init() {
    this.el = this._initContainer();
  }

  // 初始化容器
  _initContainer() {
    let { config } = this.Meditor;
    
    let box = $(`<div style="width: 100%;height: ${config.height - 80}px;overflow: hidden"></div>`);
    let editor = $(`<div class="m-e-editor" contenteditable="true"></div>`);
    box.append(editor);

    return box;
  }

  // 获取容器
  getEl() {
    return this.el;
  }
}

export default Editor;