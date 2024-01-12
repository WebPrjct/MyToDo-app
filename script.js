const saveTasks = () => {
  const taskList = document.querySelectorAll(".task span");
  // console.log(taskList)
  const datas = [];
  taskList.forEach((data) => {
    datas.push(data.textContent);
  });
  localStorage.setItem("notes", JSON.stringify(datas));
};

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Event listener for adding a new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
    saveTasks();
  }
});

// Event listener for marking a task as completed or deleting it
taskList.addEventListener("click", (event) => {
  const target = event.target;
  target.classList.toggle("completed");

  if (target.classList.contains("delete-btn")) {
    deleteTask(target.parentElement);
  } else if (target.classList.contains("task-text")) {
  }
});

// Function to add a new task to the list
function addTask(taskText) {
  const taskList=document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
//   //   taskItem.classList.add("completed");

//   const taskTextSpan = document.createElement("span");
// //   taskTextSpan.innerHTML=`<i class="done fa-solid fa-check"></i>`;
// //   taskTextSpan.classList.add("task-text");
//   taskTextSpan.textContent = taskText;

//   const deleteBtn = document.createElement("i");
//   deleteBtn.classList.add("delete-btn", "fa-solid", "fa-trash");

//   taskItem.appendChild(taskTextSpan);
//   taskItem.appendChild(deleteBtn);

//   taskList.appendChild(taskItem);

taskItem.innerHTML=`
        <span> ${taskText}</span>
        <i class="delete-btn fa-solid fa-trash"></i>
`;
taskList.appendChild(taskItem)

}

// Function to delete a task from the list
function deleteTask(taskItem) {
  taskItem.remove();
  saveTasks();
}

(
    function () {
        const getPrevData = JSON.parse(localStorage.getItem("notes"));
        console.log(getPrevData);
        getPrevData.forEach((data) => {
        addTask(data);
        });
    }
)();
