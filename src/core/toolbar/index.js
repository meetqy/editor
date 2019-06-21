class ToolBar {
  constructor(MEditor) {
    this.MEditor = MEditor;

    this._el = this.init();
  }

  init() {
    let toolbar = document.createElement('div');
    toolbar.classList.add('m-e-toolbar');
    this.MEditor._el.append(toolbar);
    
    return toolbar;
  }
}


export default ToolBar;