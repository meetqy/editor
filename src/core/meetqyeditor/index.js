import { _init } from './init';
import ToolBar from '../toolbar';
import EditorBox from '../editorbox';
import MsgBar from '../msgbar';

class MEditor {
  constructor(obj) {
    this._init(obj);
    this._toolbar = new ToolBar(this);
    this._editorbox = new EditorBox(this);
    this._msgbar = new MsgBar(this);
  }
}

Object.assign(MEditor.prototype, {
  _init
})

export default MEditor;