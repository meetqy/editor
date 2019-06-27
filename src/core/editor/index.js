import createContainer from './createContainer';

// 编辑器
class Editor {
  constructor(config) {
    this.config = config;
  }

  init() {
    return this.createContainer();
  }
}

Object.assign(Editor.prototype, {
  createContainer: createContainer
})

export default Editor;