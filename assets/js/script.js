//Costanti da utilizzare
const formList = document.getElementById("formList");
const formToDoList = document.getElementById("toDoList");
const btnAdd = document.getElementById("add");
const list = document.getElementById("list");
const array = [];
let li;


//Funzione di init
window.addEventListener("load", init());

function init () {
    
}


//Funzione del bottone
btnAdd.addEventListener("click", function(elmnt) {
    if(formToDoList.value !== ""){
        elmnt.preventDefault();
        insertArray();
        ToDoList();
        formList.reset();
    }else{
        return;
    }
});


//Funzione per salvare gli elementi negli array
function insertArray () {
    array.push(formToDoList.value);
}


//Funzione per stampare gli elementi nella lista
function ToDoList () {
    list.innerHTML = "";
    for(let i=0; i < array.length; i++){
        li = document.createElement("li");
        li.innerText = array[i];
        const remove = document.createElement("button");
        remove.setAttribute("type", "button");
        remove.setAttribute("onclick", `deleteItem(${i})`);
        remove.innerText = "❌";
        list.appendChild(li);
        li.appendChild(remove);
        
    }
    const li1 = document.querySelectorAll("li");
    li1.addEventListener("click", function () {li1.classList.toggle("sbarrato");});
}

//Fuzione di rimozione dell'elemento
function deleteItem (i) {
    array.splice(i, 1);
    ToDoList();
}