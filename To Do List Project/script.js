const Input = document.querySelector("#taskInput");

const List = document.querySelector("#list");

function addTask() {
  if (Input.value === "") {
    alert("You must write something!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = Input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  Input.value = "";
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      alert("Are you sure to remove this task!!!");
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask(){

    list.innerHTML=localStorage.getItem('data');
}
showTask();
