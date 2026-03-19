const addUserBtn = document.getElementById("addUserBtn");
const usersList = document.getElementById("usersList");
const userStats = document.getElementById("userStats");

let userCounter = 1;

function updateUserStats() {
    const totalUsers = usersList.children.length;
    userStats.textContent = `Всего пользователей: ${totalUsers}`;
}

addUserBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    
    const userText = document.createTextNode(`Пользователь #${userCounter}`);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    
    listItem.appendChild(userText);
    listItem.appendChild(deleteBtn);
    listItem.id = `user-${userCounter}`;
    
    usersList.appendChild(listItem);
    
    userCounter++;
    updateUserStats();
});

usersList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        listItem.remove();
        updateUserStats();
    }
});

updateUserStats();

console.log("Сравнение с C# WinForms");
console.log("C#: Button btn = new Button();");
console.log("JS: const btn = document.createElement('button');");
console.log("");
console.log("C#: panel1.Controls.Add(btn);");
console.log("JS: panel.appendChild(btn);");
console.log("");
console.log("C#: button1.Click += HandleClick;");
console.log("JS: button.addEventListener('click', handleClick);");