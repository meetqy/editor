import MeetqyEditor from './meetqyeditor';

export default (function() {
  return function(obj) {
    let MEditor;

    if(!MEditor) {
      return new MeetqyEditor(obj);
    }

    return MEditor;
  }
})()