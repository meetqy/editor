class EditorBox {
  constructor(MEditor) {
    this.MEditor = MEditor;

    this._el = this._init();
  }

  _init() {
    let editorBox = document.createElement('div');
    editorBox.classList.add('m-e-box');
    // editorBox.setAttribute('contenteditable', true);
    let container = document.createElement('div');
    container.classList.add('m-e-container');
    container.setAttribute('contenteditable', true);
    editorBox.appendChild(container);

    this.MEditor._el.appendChild(editorBox);

    return container;
  }
}

export default EditorBox;