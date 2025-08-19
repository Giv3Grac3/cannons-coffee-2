let container = document.querySelector(".container");
// console.log(container);

let form = document.querySelector(".form");
// console.log(form);

let userName = document.querySelector(".name");
// console.log(userName);

let userEmail = document.querySelector(".email");
// console.log(userEmail);

let password = document.querySelector(".password");
// console.log(password);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  console.log(data);

  const dataObj = Object.fromEntries(data.entries());
  console.log(dataObj);

  let name = dataObj.name;
  console.log("name:", name);

  console.log(`Welcome, ${name}! You are logged in!`, dataObj);
  form.reset();
}
