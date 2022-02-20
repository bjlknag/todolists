const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
};

function deleteToDo(event) {
    const li = event.target.parentElement;
    /// 지우고 싶은 대상을 선택하여 변수에 저장
    li.remove();
    /// 해당 element를  삭제
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    /// 선택된 item의 id를 통해, toDos array 에서 삭제
    saveToDos();
    /// 삭제한 후 saveToDos를 다시 호출하여, 삭제가 반영된 array를 localstorage에 저장
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
    /// html 안에 JS에서 생성된 li 항목을 삽입
}; 

function handleToToSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newToDoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    toDoInput.value = "";
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToToSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
   
};

