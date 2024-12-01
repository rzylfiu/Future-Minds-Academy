const taskList = document.querySelector("#task-list");

function addTask(){
    const task = prompt("Enter a task for the day");
    if(task === ""){
        alert("No task entered")
        return;
    }



const newTaskItem = document.createElement("li");
newTaskItem.textContent = task;

taskList.appendChild(newTaskItem);

addTask();

}