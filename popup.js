class Popup {
  constructor(popup_id, popup_title) {
    this.popup_id = popup_id;
    this.popup_title = popup_title;
    var popup = document.createElement("div");
    popup.id = id;
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

  addContainer(id, ...classes) {
    let element = document.createElement("div");
    element.id = id;
    element.classList.add(classes);
  }

  addTextArea(id, ...classes) {
    let element = document.createElement("textarea");
    element.id = id;
    element.classList.add(classes);
  }

  addTextInput(placeholder, id, ...classes) {
    let element = document.createElement("input");
    element.type = "text";
    element.id = id;
    element.placeholder = placeholder;
    element.classList.add(classes);
  }

  addPasswordInput(placeholder, id, ...classes) {
    let element = document.createElement("input");
    element.type = "password";
    element.id = id;
    element.placeholder = placeholder;
    element.classList.add(classes);
  }

  addEmailInput(placeholder, id, ...classes) {
    let element = document.createElement("input");
    element.type = "email";
    element.id = id;
    element.placeholder = placeholder;
    element.classList.add(classes);
  }

  addSubmitInput(value, id, ...classes) {
    let element = document.createElement("input");
    element.type = "submit";
    element.id = id;
    element.value = value;
    element.classList.add(classes);
  }

  addCheckboxInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "checkbox";
    element.id = id;
    element.classList.add(classes);
  }

  addDateInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "date";
    element.id = id;
    element.classList.add(classes);
  }

  addDatetimeInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "datetime";
    element.id = id;
    element.classList.add(classes);
  }

  addDatetimeLocalInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "datetime-local";
    element.id = id;
    element.classList.add(classes);
  }

  addFileInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "file";
    element.id = id;
    element.classList.add(classes);
  }

  addImageInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "image";
    element.id = id;
    element.classList.add(classes);
  }

  addRangeInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "range";
    element.id = id;
    element.classList.add(classes);
  }

  addNumberInput(placeholder, id, ...classes) {
    let element = document.createElement("input");
    element.type = "number";
    element.id = id;
    element.placeholder = placeholder;
    element.classList.add(classes);
  }

  addColorInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "color";
    element.id = id;
    element.classList.add(classes);
  }

  addTelInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "tel";
    element.id = id;
    element.classList.add(classes);
  }

  addTimeInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "time";
    element.id = id;
    element.classList.add(classes);
  }

  addUrlInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "url";
    element.id = id;
    element.classList.add(classes);
  }

  addMonthInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "month";
    element.id = id;
    element.classList.add(classes);
  }

  addWeekInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "week";
    element.id = id;
    element.classList.add(classes);
  }

  addRadioInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "radio";
    element.id = id;
    element.classList.add(classes);
  }

  addResetInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "reset";
    element.id = id;
    element.classList.add(classes);
  }

  addSearchInput(id, ...classes) {
    let element = document.createElement("input");
    element.type = "search";
    element.id = id;
    element.classList.add(classes);
  }

  addVideo(video) {
    // TODO with video class
  }
}

class Video {
  constructor(id, ...classes) {
    this.id = id;
    this.classes = classes;
  }

  addSource(source, type, id, ...classes) {
    let element = document.createElement("source");
    element.type = "video/" + type;
    element.src = source;
  }
}

export default Popup;
