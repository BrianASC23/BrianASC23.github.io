



document.addEventListener("DOMContentLoaded", function () { //Makes sure DOMContent is loaded
    
    let userInput = document.getElementById("symptomInput"); // Get the value of the input field

    let button = document.getElementById("btn"); //Reference to the button

    let newArray = []; // Store what I am trying to filter into an array

    button.onclick = function () {
        console.log(userInput.value); //Makes sure userInput is correctly displayed

        console.log("button is clicked"); //Makes sure the button triggers the function when clicked

        //Filters through the whole array of JSON Data 
        for (let i = 0; i < `${disease.length}`; i++) {
            for (let j = 0; j < `${disease[i].type.length}`; j++) {
                console.log(`Checking ${userInput.value} against ${disease[i].type[j]}`);
                if (userInput.value == `${disease[i].type[j]}`) { // Compare input with the type
                    console.log(`Match found: ${userInput.value}`);
                    newArray.push(`${disease[i].name}`); // Push matching type to the array
                }
            }
        }

        console.log(newArray); // Output the array of matching types

    }
});

