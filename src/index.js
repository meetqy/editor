var b = document.getElementById("b");
var editor = document.getElementById("editor");

let range = null;
editor.addEventListener("mouseup", () => {
  let selection = window.getSelection();
  if (selection.isCollapsed) return;
  range = selection.getRangeAt(0);
});

// let newRange  = document.createRange();
// newRange.selectNodeContents(strToEl('<p>AB<span style="font-weight: bold">CDEF</span>G</p>'))
// newRange.setStart(strToEl('<p>AB<span style="font-weight: bold">CDEF</span>G</p>'), 1);
// newRange.setEnd(strToEl('<p>AB<span style="font-weight: bold">CDEF</span>G</p>'), 3);
// window.getSelection().addRange(newRange);

b.addEventListener("click", () => {
  // 回显选中区域
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  let frag = range.cloneContents();
  let arr = Array.apply(null, frag.childNodes);
  let str = '';
  let nodeArr = [];
  arr.forEach((val) => {
    let strEl = bold(val);
    let nodeEl = strToEl(strEl);
    nodeArr.push(nodeEl);
    str += strEl;
  })

  document.execCommand("insertHTML", false, str);

  let se = window.getSelection();
  let newRange = se.getRangeAt(0);
  se.removeAllRanges();
  console.log(newRange);
  se.addRange(newRange);
});

const getSelectionContainerElem = function(range) {
  range = range || this._currentRange;
  let elem;
  if (range) {
    elem = range.commonAncestorContainer;
    return elem.nodeType === 1 ? elem : elem.parentNode;
  }
};

function bold(el) {
  let nodeName = el.nodeName.toLocaleLowerCase();
  if (el.nodeType === 3) {
    // 文本节点
    return `<span style="font-weight: bold">${el.nodeValue}</span>`;
  } else {
    return `<${nodeName}><span style="font-weight: bold">${el.innerHTML}</span></${nodeName}>`;
  }
}

function strToEl(str) {
  let div = document.createElement("div");
  div.innerHTML = str;
  return div.children[0];
}

function saveRange() {
  // 获取当前的选区
  const selection = window.getSelection();
  if (selection.rangeCount === 0) {
    return;
  }
  const range = selection.getRangeAt(0);

  // 判断选区内容是否在编辑内容之内
  const $containerElem = this.getSelectionContainerElem(range);
  if (!$containerElem) {
    return;
  }

  // 判断选区内容是否在不可编辑区域之内
  if (
    $containerElem.attr("contenteditable") === "false" ||
    $containerElem.parentUntil("[contenteditable=false]")
  ) {
    return;
  }

  const editor = this.editor;
  const $textElem = editor.$textElem;
  if ($textElem.isContain($containerElem)) {
    // 是编辑内容之内的
    this._currentRange = range;
  }
}
