import $ from '../utils/element';
import Words from './Words';
import AutoSave from './AutoSave';

// 底部状态栏
class StatusBar {
  constructor(Meditor) {
    this.editor = Meditor.editor;
  }

  init() {
    this._initWords();
    this._initAutoSave();
    this.el = this._initContainer();
  }

  // 初始化容器
  _initContainer() {
    return $(`<div class='m-e-status-bar'></div>`)
      .append(this.words.el)
      .append(this.autoSave.el)
  }

  getEl() {
    return this.el;
  }

  _initWords() {
    this.words = Words(this.editor);
    this.words.init();
  }

  _initAutoSave() {
    this.autoSave = AutoSave();
    this.autoSave.init();
  }
}

export default StatusBar;