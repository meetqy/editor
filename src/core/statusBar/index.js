import $ from '../utils/element';

// 底部状态栏
class StatusBar {
  constructor(Meditor) {
    
  }

  init() {
    this.el = this._initContainer();
  }

  // 初始化容器
  _initContainer() {
    return $(`<div class='m-e-status-bar'></div>`);
  }

  getEl() {
    return this.el;
  }
}

export default StatusBar;