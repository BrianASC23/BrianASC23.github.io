//LOGIN BG
function preload(){
    backgroundImage = imageLoad("/natureBG.jpg");
}

function setup(){
    backgroundImage
}


//LOGIN PAGE 
let body = document.getElementById("logBody");
let login = document.getElementById("logbutton");

login.onclick = function(event) {
    event.preventDefault();

    let loginhead = document.getElementById("loginhead");
    //Check if data matches database and login credentials are right

    //Code Here//

    //Working on that later
   
    let loginredirect = document.createElement("meta");


    loginredirect.setAttribute("http-equiv", "refresh");
    loginredirect.setAttribute("content", "2;url=questionnaire.html"); 

    loginhead.appendChild(loginredirect);

    //Mouse cursor 

    body.style.cursor = "wait";
}



