//QUESTIONNAIRE FORM

let body = document.getElementById("questionBody");
let questionForm = document.getElementById("questionnaire");
let questionSubmit = document.getElementById("form-submit");



questionSubmit.onclick = function(event) {

    //After submitting the questionnaire, a text will pop up.
    event.preventDefault();
    console.log("button clicked");
    let formReply = document.createElement("div");
    formReply.innerHTML = "Thank you for completing the questionnaire. We will be transferring you back shortly."
    questionForm.appendChild(formReply)

    formReply.style.backgroundColor = "lightgreen";
    formReply.style.fontSize = "30px";
    formReply.style.display = "flex";
    formReply.style.justifyContent = "center"
    formReply.style.padding = "30px";

    //Redirect to another page
    let head = document.getElementById("head");
    let redirect = document.createElement("meta");


    redirect.setAttribute("http-equiv", "refresh");
    redirect.setAttribute("content", "2;url=Login.html"); 

    head.appendChild(redirect);

    body.style.cursor = "wait";

}