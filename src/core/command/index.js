import Selection from '../selection';
import $ from '../utils/element';
// import $tmp from './template';

const selectCmd = ['bold']; // 必须选中才能操作的命令;

// TODO: 所有样式效果使用 class 的方式
// eg: bold 不直接调用系统自带的方法，使用 span标签 用class的方式修改样式
class Command {
  constructor(name, value) {
    this.name = name;
    this.value = value || null;
    this.selection = new Selection();
  }

  do() {
    if(!this.selection.getRange() && selectCmd.indexOf(this.name) > -1) return ; // 没有选中任务内容

    document.execCommand(this.name, false, this.value);
    this.selection.saveRange();
  }

  // TODO: 模板解析  
  // _templateParsing(name, value) {
  //   let fragment = this.selection.getSelectFragment();
  //   if(!fragment) return;
    
  //   let str = '';
  //   fragment.forEach(val => {
  //     str += `${$tmp[name]($(val).text())}`;
  //   })

  //   document.execCommand('insertHTML', false, str);
  // }
}

export default function(name, value) {
  return new Command(name, value)
}