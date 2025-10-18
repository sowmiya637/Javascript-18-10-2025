// ====================== Model ======================
class NoteModel {
  constructor() {
    this.notes = [];
    this.observers = [];
  }

  addObserver(fn) { this.observers.push(fn); }
  notify() { this.observers.forEach(fn => fn(this.notes)); }

  addNote(note) {
    this.notes.push(note);
    this.notify();
  }

  removeNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}

// ====================== View ======================
class NoteView {
  constructor() {
    this.noteListEl = document.getElementById("noteList");
  }

  render(notes) {
    this.noteListEl.innerHTML = "";
    notes.forEach((note, index) => { //forEach → each note create a list item (li)
      const li = document.createElement("li");
      li.textContent = note; //set note text
      li.addEventListener("click", () => this.onRemoveNote(index));
      this.noteListEl.appendChild(li); //all notes display in list
    });
  }

  bindRemoveNote(handler) {
    this.onRemoveNote = handler;
  }
}

// ====================== Controller ======================
class NoteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Bind View events
    this.view.bindRemoveNote(this.handleRemoveNote.bind(this));

    // Subscribe View to Model changes
    this.model.addObserver(this.view.render.bind(this.view));
  }

  handleAddNote(note) {
    if (note.trim() !== "") this.model.addNote(note);
  }

  handleRemoveNote(index) {
    this.model.removeNote(index);
  }
}

// ====================== MVVM-style Binding ======================
const model = new NoteModel(); //create instance
const view = new NoteView();
const controller = new NoteController(model, view);

// ====================== App Initialization ======================
document.getElementById("addBtn").addEventListener("click", () => {
  const noteInput = document.getElementById("noteInput");
  controller.handleAddNote(noteInput.value);
  noteInput.value = ""; //clear user input 
});
