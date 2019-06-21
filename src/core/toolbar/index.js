class ToolBar {
  constructor(MEditor) {
    this.MEditor = MEditor;

    this.init();
  }

  init() {
    let toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    this.MEditor._el.append(toolbar);
    
    this._el = toolbar;
    return toolbar;
  }
}


export default ToolBar;