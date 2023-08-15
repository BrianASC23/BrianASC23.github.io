

document.addEventListener("DOMContentLoaded", function () { //Makes sure DOMContent is loaded
    
    let userInput = document.getElementById("symptomInput"); // Get the value of the input field

    let button = document.getElementById("btn"); //Reference to the button

    let newArray = []; // Store what I am trying to filter into an array

    button.onclick = function (event) {

        event.preventDefault();
        
        console.log(userInput.value); //Makes sure userInput is correctly displayed

        console.log("button is clicked"); //Makes sure the button triggers the function when clicked

        //Filters through the whole array of JSON Data 
        for (let i = 0; i < `${disease.length}`; i++) {
            for (let j = 0; j < `${disease[i].symptom.length}`; j++) {
                console.log(`Checking ${userInput.value} against ${disease[i].symptom[j]}`);
                if (userInput.value == `${disease[i].symptom[j]}`) { // Compare input with the type
                    console.log(`Match found: ${userInput.value}`);
                    newArray.push(`${disease[i].name}`); // Push matching type to the array
                }
            }
        }

        console.log(newArray); // Output the array of matching types

    }
});

//Problem: If I write more symptoms the array will just add the new disease with the old disease.
//Lets say Fever has an output of 30 and Frail has an output of 10. 
//The newArray will output 40 if you wrote one down then the other.

