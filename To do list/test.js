// const viewtask = document.getElementById("viewtask");

let tasks = []; // store all tasks globally 
// if (viewtask.length == 0) {
//     let li = document.createElement("h2"); // h2 should be a string
//     let viewtask = document.getElementById("viewtask");
//     li.innerHTML = `No task entered`;
//     viewtask.appendChild(li);
// }
function refreshView() {
    let list = document.getElementById("viewtask");
    // list.innerHTML = ""; // clear previous content
    
    if (tasks.length === 0) {
        list.innerHTML = `<li id="notask">No tasks found!</li>`;
        return;
    }
}


function apend() {
    try {
        let list = document.getElementById("viewtask");
        let linotask = document.getElementById("notask");
        if (linotask){
        list.innerHTML = null; // clear previous content
        }
        const taskInput = document.querySelector(".in_task");
        const dueInput = document.querySelector(".in_time");
        let name = taskInput.value.trim();
        let due = dueInput.value.trim();


        if (name === "") {
            alert("No task entered");
            return;
        }
        else if (due === "") {
            alert("Due time not entered");
            return;
        }
        else {


            // Task data
            let id = Math.floor(Math.random() * 1000);
            let time = new Date().toLocaleString();
            let task = { id, name, time };
            tasks.push(task);

            // Create task item
            let li = document.createElement("li");
            li.setAttribute("data-id", id);
            let hr = document.createElement("hr");
            hr.setAttribute("id", id);
            li.innerHTML = `
            <b class="task-text">Task: ${name}<br></b>
            &nbsp;&nbsp;<small class="task-time"> Created At :<br>${time}</small>
            &nbsp;&nbsp;<small class="task-time"> Due At :<br>${due}</small>
            <div class="libtn">
            <button class="complete" onclick="completeTask(${id})"> ✔️Complete</button>
            <button class="delete" onclick="clearTask(${id})">🗑️ Delete</button>
            </div>`;

            list.appendChild(li);
            list.appendChild(hr);
            taskInput.value = "";
        }
    }
    catch (err) {
        alert("Error: " + err.message);
    }
}

//  Strike through text
function completeTask(id) {
    const li = document.querySelector(`[data-id="${id}"]`);
    const text = li.querySelector(".task-text");
    const time = li.querySelector(".task-time");
    const btn = li.querySelector(".complete");

    if (!text.classList.contains("done")) {
        text.innerHTML = `<s>${text.textContent}</s>`;
        time.innerHTML = `<s>${time.textContent}</s>`;
        text.classList.add("done");
        btn.innerHTML = `✅ Undo`;
    } else {
        text.textContent = text.textContent;
        time.textContent = time.textContent; // remove strike
        text.classList.remove("done");
        btn.innerHTML = `✔️Complete`;


    }
}

//  Delete task
function clearTask(id) {
    const li = document.querySelector(`[data-id="${id}"]`);
    const hr = document.querySelector(`[id="${id}"]`);
    li.remove();
    hr.remove();
    tasks = tasks.filter(task => task.id !== id);
    refreshView();

}
window.onload = refreshView()

// let list = document.getElementById("viewtask");
// if (tasks.length == 0) {
//     list.innerHTML = "";
//     list.innerHTML = "<li>No tasks found!</li>";
//     return;