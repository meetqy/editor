class MsgBar {
  constructor(MEditor) {
    this.md_el = MEditor._el;

    this._el = this.init();
  }

  init() {
    let msgBar = document.createElement('div');
    msgBar.classList.add('m-e-msg-bar');
    this.md_el.appendChild(msgBar);

    return msgBar;
  }
}

export default MsgBar;