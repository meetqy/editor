// addEventListenr 监听时间方法

export const _keydown = function(e) {};

export const _keyup = function() {
  if (!this._el.innerText) {
    this._el.innerHTML += "<p><br/></p>";
  }
};

export const _mousedown = function() {};

export const _mouseup = function() {
  let select = Object.assign(window.getSelection());
  if (!select.toString()) return;
  this._select = select;
};

// //替换选中文本内容，参数text为要替换的内容
// function repaceSelectionText(text) {
//   if (window.getSelection) {
//     var sel = window.getSelection();
//     alert(sel.rangeCount); //选区个数, 通常为 1 .
//     sel.deleteFromDocument(); //清除选择的内容
//     var r = sel.getRangeAt(0); //即使已经执行了deleteFromDocument(), 这个函数仍然返回一个有效对象.
//     var selFrag = r.cloneContents(); //克隆选择的内容
//     var frag = selFrag.childNodes; //如果执行了deleteFromDocument(), 这个数组长度将会是 0
//     for (var i = 0; i < frag.length; i++) {
//       alert(frag[i].nodeName); //枚举选择的对象
//     }
//     var h1 = document.createElement("H1"); //生成一个插入对象
//     h1.innerHTML = text; //设置这个对象的内容
//     r.insertNode(h1); //把对象插入到选区, 这个操作不会替换选择的内容, 而是追加到选区的后面, 所以如果需要普通粘贴的替换效果, 之前执行deleteFromDocument()函数.
//   } 
//   // else if (document.selection && document.selection.createRange) {
//   //   //IE浏览器
//   //   var sel = document.selection.createRange(); //获得选区对象
//   //   alert(sel.htmlText); //选择区的html文本.
//   //   sel.pasteHTML("<h1>标题</h1>"); //粘贴到选区的html内容, 会替换选择的内容.
//   // }
// }

export default {
  _keydown,
  _keyup,
  _mousedown,
  _mouseup
};
