import { _init } from './init';
import ToolBar from '../toolbar';
import EditorBox from '../editorbox';
import MsgBar from '../msgbar';

class MEditor {
  constructor(obj) {
    this._el = this._init(obj);
    
    this.EditorBox = new EditorBox(this);
    this.ToolBar = new ToolBar(this);
    this.MsgBar = new MsgBar(this);
  }

  getToolBar() {
    return this.ToolBar;
  }

  getEditorBox() {
    return this.EditorBox;
  }

  getMsgBar() {
    return this.MsgBar;
  }
}

Object.assign(MEditor.prototype, {
  _init
})

export default MEditor;