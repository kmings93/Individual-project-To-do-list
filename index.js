let list = document.querySelector("#toDoList"); // 1: get the list
let addButton = document.querySelector("#addButton");
let createList = () => {
  let addDescription = document.querySelector("#myItems").value; // 2: we need to get the value for the input
  let addDate = document.querySelector("#myDates").value; // 3: we need to get the value for the input
  const li = document.createElement("li"); //5 : create li element

  const checkbox = document.createElement("input"); // we create an input tag for complete
  checkbox.id = "completeBtn"; // we create id to the input tag. Note: different format
  checkbox.value = "Complete";
  checkbox.type = "button"; // we added a button
  checkbox.addEventListener("click", function () {
    paragraph.classList.toggle("checkTwo"); // Note: to use classList and not ClassList
    spanDate.classList.toggle("checkTwo");
  });

  if (addDescription == "" || addDate == "") {
    alert("Please fill out task");
  } else {
    console.log("success");
  }

  const paragraph = document.createElement("p"); // create paragraph for the button
  paragraph.id = "paragraph";
  paragraph.textContent = addDescription; // use textContent to set the input field of the text

  const spanDate = document.createElement("span");
  spanDate.id = "spanDate";
  spanDate.textContent = addDate;

  const remove = document.createElement("button"); // Delete Button
  remove.id = "deleteBtn"; // id called deleteBtn
  //   remove.innnerHTML = "&cross;"; //Issue: create a cross
  remove.innerText = "Delete";

  remove.style.backgroundColor = "#ff3b30";
  remove.style.color = "white";
  remove.addEventListener("click", function () {
    this.parentElement.remove();
  });

  // we append all the elements to the li elements
  li.append(paragraph);
  li.appendChild(spanDate); // Issue: cannot create para date >> change to span date
  li.appendChild(checkbox); // append the variable. Issue: I had to put it at the end
  li.appendChild(remove);
  list.appendChild(li);

  document.querySelector("#myItems").value = ""; // Issue: To set empty value.
  document.querySelector("#myDates").value = ""; // Note: this allows the box to be empty
  //   addDescription = "";

  li.classList.add("toDoList"); // Add for CSS
};

addButton.addEventListener("click", createList); //addEventListener method:{object.addEventListener(event Listener, name of funtion)}

// Clear All button
let removeAllBtn = document.getElementById("removeAllBtn");
removeAllBtn.addEventListener("click", function () {
  list.remove();
});
