import Toolbar from './toolbar/index';
import StatusBar from './statusBar/index';
import Editor from './editor/index';
import defaultConfig from './defaultConfig';
import $ from './utils/element';
import '../assets/styles/main.scss';

class MeetqyEditor {
  constructor(options) {
    this.config = this._initConfig(options);

    this._init();
  }

  _init() {
    this._initEditor(this);
    this._initToolbar(this);
    this._initStatusBar(this);

    this._initContainer();
  }

  _initContainer() {
    let $meetqyEditorContainer = this._createContainer();
    let $eidtor = this.editor.getEl(true);
    let $statusBar = this.statusBar.getEl();
    let $toolbar = this.toobar.getEl();

    $meetqyEditorContainer
      .append($toolbar)
      .append($eidtor)
      .append($statusBar);

    $('#box1').append($meetqyEditorContainer)
  }

  _createContainer() {
    let { config } = this;
    let meetqyEditorContainer = $('<div></div>')
      .addClass('meetqy-editor')
      .id('meetqy-editor')
      .css({
        width: config.width + 'px',
        height: config.height + 'px',
        border: '1px solid #999'
      })

    return meetqyEditorContainer;
  }

  // 初始化编辑器
  _initEditor() {
    this.editor = new Editor(this);
    this.editor.init();
  }

  // 初始化工具栏
  _initToolbar() {
    this.toobar = new Toolbar(this);
    this.toobar.init();
  }

  // 初始化状态栏
  _initStatusBar() {
    this.statusBar = new StatusBar(this);
    this.statusBar.init();
  }

  // 初始化配置
  _initConfig(options) {
    let {el} = options;
    if(!el) throw new Error('请传入容器！');
    let config = {};
    
    // 判断dom
    let dom = '';
    dom = typeof el === 'string' ? document.getElementById(el.replace('#', '')) : el;
    if(!dom) throw new Error('请传入正确容器！');
    
    config.el = dom;

    return {
      ...defaultConfig,
      ...config
    }
  }
}

export default MeetqyEditor;