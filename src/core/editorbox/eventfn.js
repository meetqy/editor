// addEventListenr 监听时间方法

export const _keydown = function(e) {
  
}

export const _keyup = function() {
  if(!this._el.innerText) {
    this._el.innerHTML += '<p><br/></p>'
  }
}

export const _mousedown = function() {

}

export const _mouseup = function() {
  this._select = getSelection();
  if(!this._select.toString()) return;

  this._Rs(this._select).h1();
}

export default {
  _keydown, _keyup, _mousedown, _mouseup
}