import $ from '../utils/element';

// 字数统计
class AutoSave {
  constructor() {
    this.status = 0;  // 0 已保存 1 保存中

    this.statusJson = {
      0: '已保存',
      1: '保存中...'
    }
  }

  init() {
    this.el = $(`<span class='m-e-auto-save'>${this.getStatus()}</span>`);
    return this.el;
  }

  getStatus() {
    let status = this.statusJson[this.status];
    return status;
  }

  setStatus(status) {
    this.status = status;
    this.el.text(this.getStatus());
  }
}

export default (function() {
  let autoSave;
  return function() {
    if(!autoSave) {
      autoSave = new AutoSave();
    }
    return autoSave;
  }
})()