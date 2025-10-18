
# Notes App - MVVM / MVC Example

This project demonstrates **code organization and design patterns** in JavaScript through a simple Notes App.  
It implements a **Model-View-Controller (MVC) / MVVM style** architecture for managing notes with add/remove functionality and automatic UI updates.

## Features

- Add and remove notes  
- Automatically update UI when the data changes  
- Clean separation of concerns using **MVC / MVVM patterns**  
- Easy-to-extend and maintain architecture  

## Design Concepts

### 1. Model

```js
class NoteModel {
  constructor() {
    this.notes = [];
    this.observers = [];
  }

  addObserver(fn) { this.observers.push(fn); }
  notify() { this.observers.forEach(fn => fn(this.notes)); }

  addNote(note) { this.notes.push(note); this.notify(); }
  removeNote(index) { this.notes.splice(index, 1); this.notify(); }
}
````

* **Responsibilities**: Store and manage notes
* Maintains a list of **observers** to notify on changes
* Implements **add** and **remove** methods
* Encapsulates all data-related logic

---

### 2. View

```js
class NoteView {
  constructor() { this.noteListEl = document.getElementById("noteList"); }

  render(notes) {
    this.noteListEl.innerHTML = "";
    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.textContent = note;
      li.addEventListener("click", () => this.onRemoveNote(index));
      this.noteListEl.appendChild(li);
    });
  }

  bindRemoveNote(handler) { this.onRemoveNote = handler; }
}
```

* **Responsibilities**: Display notes to the user
* Dynamically updates the DOM when notified by the Model
* Binds user events (click on note to remove) to handlers

---

### 3. Controller

```js
class NoteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindRemoveNote(this.handleRemoveNote.bind(this));
    this.model.addObserver(this.view.render.bind(this.view));
  }

  handleAddNote(note) { if (note.trim() !== "") this.model.addNote(note); }
  handleRemoveNote(index) { this.model.removeNote(index); }
}
```

* **Responsibilities**: Handle user interactions
* Mediates between Model and View
* Handles adding and removing notes via methods
* Subscribes View to Model updates

---

### 4. MVVM-style Binding

* The app uses a **Model-View-ViewModel** style binding:

  * Model → stores the data
  * View → renders the data
  * Controller/ViewModel → binds user events and model updates

* Whenever the Model changes, it **notifies the View**, which automatically re-renders

---

## Usage Example

```js
const model = new NoteModel();
const view = new NoteView();
const controller = new NoteController(model, view);

document.getElementById("addBtn").addEventListener("click", () => {
  const noteInput = document.getElementById("noteInput");
  controller.handleAddNote(noteInput.value);
  noteInput.value = "";
});
```

* Type a note in the input box and click **Add Note**
* Click a note in the list to remove it
* The UI is updated automatically through observer notifications

---

## Benefits

* Clear separation of concerns
* Scalable and maintainable code structure
* Avoids manual DOM manipulation in multiple places
* Reactive UI updates

