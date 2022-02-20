const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const showNew = document.querySelector("#greeting");
const hiddenClass = "hidden";
const userNameKey = "username";

function paintGreeging(username) {
    showNew.classList.remove(hiddenClass);
    showNew.innerText = `Welcome ${username}`;
}

function onButtonClick(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(userNameKey, username);
    loginForm.classList.add(hiddenClass);
    paintGreeging(username);
}; 

const savedUsername = localStorage.getItem(userNameKey);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(hiddenClass);
    loginForm.addEventListener("submit", onButtonClick);
} else {
    // show the greeting
    paintGreeging(savedUsername);
}
