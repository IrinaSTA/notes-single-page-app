var noteApp = new NoteApp();
noteApp.addNote('Success is not final, failure is not fatal: ' +
'it is the courage to continue that counts.');
noteApp.addNote('The farther backward you can look, ' +
'the farther forward you are likely to see.');

// this relies on new Note working
// need to isolate this test
describe("NoteApp", it("can add two notes",
expect(noteApp.allNotes.length).toEqual(2)));
describe("NoteApp", it("can retrieve all notes",
expect(noteApp.retrieveAll().length).toEqual(2)));
