class Popup {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  addText(value, id, ...classes) {
    let element = document.createElement("p");
    element.innerHTML = value;
    element.id = id;
    element.classList.add(classes);
  }

  addLinkText(value, link, id, ...classes) {
    let element = document.createElement("a");
    element.innerHTML = value;
    element.href = link;
    element.id = id;
    element.classList.add(classes);
  }

  addButton(value, onclick, id, ...classes) {
    let element = document.createElement("button");
    element.innerHTML = value;
    element.onclick = onclick;
    element.id = id;
    element.classList.add(classes);
  }

  addImage(source, alt, id, ...classes) {
    let element = document.createElement("img");
    element.src = source;
    element.alt = alt;
    element.id = id;
    element.classList.add(classes);
  }

  addForm(action, method, id, ...classes) {
    let element = document.createElement("form");
    element.action = action;
    element.method = method;
    element.id = id;
    element.classList.add(classes);
  }
}

export default Popup;
