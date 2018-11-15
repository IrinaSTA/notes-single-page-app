var noteApp = new NoteApp();
var noteListView = new NoteListView(noteApp);

describe("NoteListView",
it("can render empty html list",
expect(noteListView.renderPreviews()).
toEqual('<ul></ul>')));

noteApp.addNote('Success is not final, failure is not fatal: ' +
'it is the courage to continue that counts.');

describe("NoteListView",
it("can render html list with one note",
expect(noteListView.renderPreviews()).
toEqual('<ul><li><div>Success is not final...</div></li></ul>')));

noteApp.addNote('The farther backward you can look, ' +
'the farther forward you are likely to see.');

describe("NoteListView",
it("can render html list with two notes",
expect(noteListView.renderPreviews()).
toEqual('<ul><li><div>Success is not final...</div></li>' +
'<li><div>The farther backward...</div></li></ul>')));
