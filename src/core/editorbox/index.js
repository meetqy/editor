class EditorBox {
  constructor(MEditor) {
    this.MEditor = MEditor;

    this._el = this.init();
  }

  init() {
    let editorBox = document.createElement('div');
    editorBox.classList.add('m-e-box');
    editorBox.setAttribute('contenteditable', true);

    this.MEditor._el.appendChild(editorBox);

    return editorBox;
  }
}

export default EditorBox;