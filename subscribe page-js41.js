let nameinputele = document.getElementById("name");
let emailinputele = document.getElementById("email");
let msg = "Required*";

let nameerror = document.getElementById("nameErrMsg");
let emailerror = document.getElementById("emailErrMsg");

let formele = document.getElementById("subscribeForm");

formele.addEventListener("submit", function(event) {
    event.preventDefault();
})
nameinputele.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameerror.textContent = msg;
    } else {
        nameerror.textContent = "";
    }
});
emailinputele.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailerror.textContent = msg;
    } else {
        emailerror.textContent = "";
    }
});