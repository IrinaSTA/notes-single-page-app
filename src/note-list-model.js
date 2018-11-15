(function(exports) {
  function NoteApp() {
    this.allNotes = [];
  }

  NoteApp.prototype.addNote = function(text) {
    this.allNotes.push(new Note(text));
  }

  NoteApp.prototype.retrieveAll = function() {
    return this.allNotes;
  }

  exports.NoteApp = NoteApp;
})(this);
