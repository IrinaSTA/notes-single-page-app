var parent = document.getElementById("test-results")
var p = document.createElement("p")
var note = new Note('Success is not final, failure is not fatal: ' +
'it is the courage to continue that counts.')

describe("Note",
  it("can return text", expect(note.getText()).toEqual('Success is not final,' +
  ' failure is not fatal: it is the courage to continue that counts.')));

// describe("Note",
//   it("has a unique ID", expect(note.getId()).toEqual('0')));
