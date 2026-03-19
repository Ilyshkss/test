// let array = [
//     {href: "http://google.com", text: "http://google.com"},
//     {href: "/tutorial", text: "/tutorial.html"},
//     {href: "local/path", text: "local/path"},
//     {href: "ftp://ftp.com/my.zip", text: "ftp://ftp.com/my.zip"},
//     {href: "http://nodejs.org", text: "http://nodejs.org"},
//     {href: "http://internal.com/test", text: "http://internal.com/test"},
// ];
// let ul = document.createElement('ul');
// document.body.prepend(ul)

// for(let i=0; i < array.length;i++){
//     let li = document.createElement('li');
//     ul.append(li);
//     let a = document.createElement('a');
//     li.append(a);
//     a.href = array[i].href;
//     a.textContent = array[i].text;
// }

// const links = ul.querySelectorAll("a");
// console.log(links);
// for (let i=0; links.length; i++){
//     let href = links[i].getAttribute("href");
//     console.log(href)
// }


// const lin = document.querySelectorAll("li");
// ul.insertBefore(lin[0], lin[4])

// let elem = document.getElementById('elem')
// function clear(elem) {
//         while(elem.firstChild) {
//             elem.firstChild.remove();
//         }
// }
// clear(elem);


// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// btn.addEventListener("click", function(){
//     // alert('Hello');
//     // btn.textContent = "button"
//     // let clon = inp.cloneNode();
//     // btn.after(clon);
// })

// let btnDisable = document.querySelector(".disable");
// let btnEnable = document.querySelector(".enable");
// let inp = document.querySelector("input");
// btnDisable.addEventListener("click", function(){
//     inp.setAttribute("disabled", true)
// })
// btnEnable.addEventListener("click", function(){
//     inp.removeAttribute("disabled")
// })

// let div = document.querySelector("div");
// let outpt1 = document.querySelector(".one");
// let outpt2 = document.querySelector(".two");
// div.addEventListener("mousemove", function(event){
//     outpt1.textContent = 'X' + event.clientX;
//     outpt2.textContent = 'Y' + event.clientY;
// })

// let inp = document.querySelector("input");
// inp.addEventListener("click", function(){
//     inp.type = "number";
// })

// let div = document.querySelector("div");
// let storedDate = localStorage.getItem(lastDate);
// localStorage.setItem("lastDate", newDate());


// let input = document.querySelector("input");
// let buttonAddTask = document.querySelector(".addTask");
// let ul = document.querySelector("ul");
// let buttonClear = document.querySelector(".clear");
// let array = [];
// if (array.length != 0) {

// }
// buttonAddTask.addEventListener("click", function(){
//     let li = document.createElement('li');
//     ul.append(li);
//     li.textContent = input.value;
//     array.push(input.value)
//     localStorage.setItem("task", JSON.stringify(array))
//     input.value = "";
// })

// function addTask(){
// let li = document.createElement('li');
// }




// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// button.addEventListener("click", function(){
//     localStorage.setItem("name", JSON.stringify(input.value));
//     div.innerHTML = "Привет, " + JSON.parse(localStorage.getItem("name"));
//     input.style.display = "none"
//     button.style.display = "none"
// })


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => json.forEach(element => {
//         showUsers(element)
//     }));


// let root = document.getElementById("root");
// let userForm = document.createElement("form");
// root.append(userForm);
// let inputName = document.createElement("input");
// let inputEmail = document.createElement("input");
// let inputPhone = document.createElement("input");
// let inputWebsite = document.createElement("input");
// userForm.append(inputName);
// userForm.append(inputEmail);
// userForm.append(inputPhone);
// userForm.append(inputWebsite);
// let button = document.createElement("button");
// userForm.append(button);
// button.addEventListener("click", function(){
    
// })

let num1 = 6;
let num2 = 0;
let error = new Error("Деление на ноль!");
try {
    if (num2 == 0) {
        throw new SyntaxError ("Деление на ноль!")
    }
    let result = num1 / num2;
    console.log("Результат:" + result);
} catch (error) {
    if (error.name == "SyntaxError") {
        console.log("Ошибка:" + error.message);
    } else {
        throw error;
    }
} finally {
    console.log ("Операция завершена")
}





