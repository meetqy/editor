// 选中区域（range），操作方法

class Selection {
  constructor() {
    
  }

  getRange() {
    let selection = window.getSelection();
    console.log(selection)
  }
}

export default Selection;