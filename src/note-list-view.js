(function(exports) {
  function NoteListView(noteApp) {
    this.noteApp = noteApp;
  }

  NoteListView.prototype.renderPreviews = function() {
    result = this.noteApp.retrieveAll().map(note => note.renderPreview()).join('');
    return `<ul>${result}</ul>`
  }

  exports.NoteListView = NoteListView;
})(this);
