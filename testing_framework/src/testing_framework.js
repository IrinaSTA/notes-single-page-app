function Expect(thing) {
  this.thing = thing
}

Expect.prototype.toEqual = function(anotherThing) {
  if (this.thing === anotherThing) {
    return "pass"
  } else {
    return `FAIL; ${this.thing} is not equal to ${anotherThing}`
  }
}

Expect.prototype.toContain = function(something) {
  if (this.thing.includes(something)) {
    return "pass"
  } else {
    return `FAIL; ${this.thing} does not include ${something}`
  }
}

expect = function(thing) {
  obj = new Expect(thing)
  return obj
}

var page = window.document.body.innerHTML;

function it(description, action) {
  return `${description}` + ` - ` + `${action}`;
}

function describe(item, test) {
  var text = `${item}` + " - " + `${test}`
  addElement(text, "test-results")
}

function addElement(text, location) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById(location);
  document.body.insertBefore(newDiv, currentDiv);
}
