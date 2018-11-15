var parent = document.getElementById("test-results")
var p = document.createElement("p")
var note = new Note('Success is not final, failure is not fatal: ' +
'it is the courage to continue that counts.')
var singleNoteView = new SingleNoteView(note);

describe("SingleNoteView",
it("renders div containing text of entire note",
expect(singleNoteView.renderNote()).
toEqual("<div>Success is not final, failure is not fatal: " +
"it is the courage to continue that counts.</div>")));
