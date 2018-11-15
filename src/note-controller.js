(function(exports) {
  function NoteController(noteApp) {
    this.noteApp = noteApp;
    this.noteApp.addNote("Favourite drink: seltzer.");
    this.noteList = new NoteListView(this.noteApp);
  }

  NoteController.prototype.renderList = function() {
    debugger;
    document.getElementById("app").innerHTML = this.noteList.renderPreviews();
  }

  exports.NoteController = NoteController;
})(this);
