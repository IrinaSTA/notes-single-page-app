var noteApp = new NoteApp();

var noteController = new NoteController(noteApp);

NoteController.prototype.renderTestList = function() {
  document.getElementById("app").innerHTML = this.noteList.renderPreviews();
}

noteController.renderTestList();

describe("NoteController", it("can render preview list",
expect(document.body.innerHTML).
toContain('<ul><li><div>Favourite drink: sel...</div></li></ul>')));
