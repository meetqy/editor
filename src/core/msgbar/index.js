class MsgBar {
  constructor(MEditor) {
    this.MEditor = MEditor;

    this._el = this.init();
  }

  init() {
    let msgBar = document.createElement('div');
    msgBar.classList.add('m-e-msg-bar');
    this.MEditor._el.appendChild(msgBar);

    return msgBar;
  }
}

export default MsgBar;