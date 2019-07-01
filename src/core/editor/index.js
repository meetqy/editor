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
    let editor = $(`<div class="m-e-editor" style="box-sizing: content-box" contenteditable="true"><p>是你吗说的就是卡三等奖啥课的大健康</p><p>奥斯卡了起舞好久等哈我能起来搜想好</p><p>琼文五十九奥坎上课了我虚拟机恩十九</p><p>阿里为萨达十九按键我卡机我能去吗我</p><p>啊期号说你啊数据库了安居客我能数据</p><p>安居客啥都看觉得是阿迷技巧按什么那</p><p>奥士康加看市地税局艾迪康爱的世界的</p><p>阿卡丽看了请我们问色素你那就按键你</p></div>`);
    
    box.append(editor);

    return [box, editor];
  }

  // 让编辑始终保持 p标签为一行
  _initDefaultP() {
    this.el.append($('<p><br/></p>'))
  }

  // 初始化绑定事件
  _initBindEvent() {
    this.el.on('mouseup', (e) => {
      this.selection.saveRange();
    })

    this.el.on('keydown', (e) => {
      
    })

    this.el.on('keyup', e => {
      if(e.keyCode == 8) {
        if(this.el.isNotChildren()) this._initDefaultP();
      }

      
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