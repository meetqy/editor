// 默认配置
const defaultArgs = {
  el: '',
  width: 1100,
  height: 450
}


export const _init = function(obj) {
  // 完整参数
  const args = checkArgs(obj);

  // this.outer_dom => dom对象  用户传递的dom对象
  if(typeof args.el === 'string') {
    let dom = document.getElementById(args.el);
    if(dom) throw new Error('找不到初始化容器. code: 100');
    this.outerDom = dom ;
  } else {
    // FIXME: jquery对象 || 其他对象会有bug
    this.outerDom = args.el;
  }

  this.width = args.width;
  this.height = args.height;

  // this.el  MeetqyEditor容器对象
  this._el = initContainer.bind(this)();
}

// 初始化容器  在用户自定义的容器里面生成一个自己的容器
// 理由：用户设置的容器id不是固定的，设置样式的时候不好设置
function initContainer() {
  this.outerDom.setAttribute('style', `width: ${this.width}px;height: ${this.height}px`);
  let el = document.createElement('div');
  el.id = 'meetqy-editor';
  el.setAttribute('style', `width: ${this.width}px;height: ${this.height}px`);
  this.outerDom.appendChild(el);
  return el;
}


// 检测参数
function checkArgs(obj) {
  if(!obj) {
    throw new Error('初始化编辑器失败，请传入参数. code: 101');
  } else if(!obj.el) {
    throw new Error('找不到初始化容器. code: 100');
  }

  return {
    ...defaultArgs,
    ...obj
  }
}