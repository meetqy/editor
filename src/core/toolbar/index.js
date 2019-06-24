class ToolBar {
  constructor(MEditor) {
    this.md_el = MEditor._el;
    this._el = this.init();
    this.b();

    this.EditorBox = MEditor.getEditorBox()
  }

  init() {
    let toolbar = document.createElement('div');
    toolbar.classList.add('m-e-toolbar');
    this.md_el.insertBefore(toolbar, this.md_el.firstChild);
    
    return toolbar;
  }

  b() {
    let div = document.createElement('div');
    div.innerHTML="B";

    div.addEventListener('click', () => {
      let select = this.EditorBox.getSelect();
      console.log(select);
    })

    this._el.appendChild(div);
  }
}


export default ToolBar;