import { _init } from './init';
import ToolBar from '../toolbar';
import EditorBox from '../editorbox';

class MEditor {
  constructor(obj) {
    this._init(obj);
    this._toolbar = new ToolBar(this);
    this._editorbox = new EditorBox(this);
  }
}

Object.assign(MEditor.prototype, {
  _init
})

export default MEditor;



