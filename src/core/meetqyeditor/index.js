import { _init } from './init';

class MEditor {
  constructor(obj) {
    this._init(obj);
  }
}

Object.assign(MEditor.prototype, {
  _init
})

export default MEditor;



