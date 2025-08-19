console.log("script loaded");
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  console.log("Name:", document.getElementById("name").value);
  console.log("Email:", document.getElementById("email").value);
  console.log("Phone:", document.getElementById("phone").value);
  console.log("Comments:", document.getElementById("comments").value);
  console.log("Coffee Flavor:", document.getElementById("cffFlv").value);

  // Radio buttons
  const buyCoffee = document.querySelector(
    "input[name='ntrstdbyngcff']:checked"
  );
  const seekJob = document.querySelector(
    "input[name='ntrstdskngmplymnt']:checked"
  );

  if (buyCoffee) {
    console.log("Interested in buying coffee");
  }
  if (seekJob) {
    console.log("Interested in seeking employment");
  }
});
