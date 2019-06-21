import MeetqyEditor from './meetqyeditor';
import '../assets/styles/main.scss';

export default (function() {
  return function(obj) {
    let MEditor;

    if(!MEditor) {
      return new MeetqyEditor(obj);
    }

    return MEditor;
  }
})()