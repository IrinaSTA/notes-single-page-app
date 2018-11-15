(function(exports) {
  function Note(text) {
    this.text = text;
  }

  Note.prototype.getText = function() {
    return this.text;
  }

  Note.prototype.preview = function() {
    return this.text.slice(0,20) + "...";
  }

  Note.prototype.renderPreview = function() {
    return `<li><div>${this.preview()}</div></li>`
  }

  exports.Note = Note;
})(this);
