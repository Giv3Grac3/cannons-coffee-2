let form = document.querySelector("form");
// console.log(form);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  // console. log (data);

  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  const name = dataObject.name;
  console.log(name);
  const email = dataObject.email;
  console.log(email);

  const phone = dataObject.phone;
  console.log(phone);

  const interest = dataObject.interest;
  console.log(interest);

  const comments = dataObject.comments;
  console.log(comments);

  const cffFlv = dataObject.cffFlv;
  console.log(cffFlv);

  const message = document.createElement("p");
  message.textContent = `Thank you ${name}! Thank you for your interest in ${interest}!
    Your favorite coffee flavor is ${cffFlv}
    and your comments are "${comments}". 
    We will soon contact you at ${email} or ${phone}.`;

  // add message to the page
  form.parentNode.appendChild(message);

  form.style.display = "none";

  //   const email = document.getElementById("email");
  //   const phone = document.getElementById("phone").value;
  //   const comments = document.getElementById("comments").value;
  //   const flavor = document.getElementById("cffFlv").value;
}
form - addEventListener("submit", onFormSubmit);

// const form = document.querySelector(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // stop page refresh

//   // grab values
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;
//   const comments = document.getElementById("comments").value;
//   const flavor = document.getElementById("cffFlv").value;

// Radio buttons

// const buyCoffee = document.querySelector(
//   "input[name='ntrstdbyngcff']:checked" //work on underdstanding this
// );
// const seekJob = document.querySelector(
//   "input[name='ntrstdskngmplymnt']:checked"
// );

// let interest = "";
// if (buyCoffee) {
//   interest = "buying coffee";
//   console.log("Interested in buying coffee");
// }
// if (seekJob) {
//   interest = "seeking employment";
//   console.log("Interested in seeking employment");
// }

// hide the form
// form.style.display = "none";

// create thank you message with a template literal
// const message = document.createElement("p");
// message.innerHTML = `Thank you <strong>${name}</strong>!
//   We appreciate your interest in <strong>${interest}</strong>.
//   Your favorite coffee flavor is <strong>${flavor}</strong>
//   and your comments are "<em>${comments}</em>".
//   We will soon contact you at <strong>${email}</strong> or <strong>${phone}</strong>.`;

// // add message to the page
// form.parentNode.appendChild(message);
