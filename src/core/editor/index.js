import $ from '../utils/element';
import Selection from '../selection';

// 编辑器
class Editor {
  constructor(Meditor) {
    this.Meditor = Meditor;

    this.selection = new Selection();
  }

  init() {
    let [elContainer, el] = this._initContainer();
    this.el = el;
    this.elContainer = elContainer; // 外层的容器 首次初始化的时候会使用

    this._initBindEvent();
  }

  // 初始化容器
  _initContainer() {
    let { config } = this.Meditor;
    
    let box = $(`<div style="width: 100%;height: ${config.height - 80}px;overflow: hidden"></div>`);
    let editor = $(`<div class="m-e-editor" contenteditable="true"><p class='m-e-default-row'><br></p></div>`);
    
    box.append(editor);

    return [box, editor];
  }

  // 初始化绑定事件
  _initBindEvent() {
    this.el.on('mouseup', (e) => {
      // console.log(e);
    })

    this.el.on('keydown', (e) => {
      if(e.keyCode == 8) {
        let children = this.el.children();
        if(children.length === 1 && children[0].className === 'm-e-default-row') {
          let event = e || event;
          event.preventDefault();  
        }
      }
    })

    this.el.on('keyup', e => {
      
    })
  }

  /**
   * 返回容器
   * @param {boolean} flag true: 外层容器，初始化的时候用， 其他情况不传入参数
   */
  getEl(flag) {
    return flag ? this.elContainer : this.el;
  }
}

export default Editor;