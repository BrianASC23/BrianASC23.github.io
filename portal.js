document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("symptomInput");
    let button = document.getElementById("btn");
    let newArray = [];
    let symptomList = document.getElementById("symptomList");

    // Populate the datalist with autocomplete options //Maybe add onchange or oninput or on keyUp
    Symptoms.forEach(symptom => {
    let option = document.createElement("option");
    option.value = symptom;
    symptomList.appendChild(option);
  });
  
    button.onclick = function (event) {
      event.preventDefault();
      newArray = []; // Clear the array before each search

      let selectedSymptoms = userInput.value.toLowerCase().split(", ");
      
      console.log(selectedSymptoms);
        
  
      for (let i = 0; i < disease.length; i++) {
        for (let j = 0; j < disease[i].symptom.length; j++) {
          if (userInput.value.toLowerCase().includes(disease[i].symptom[j].toLowerCase())) {
            newArray.push(disease[i].name);
            
            break; // Exit the loop once a match is found for the current disease
          }
        
        }
      }
      console.log(newArray);
  
      // Store the array of matching diseases in Local Storage
      localStorage.setItem("newArray", JSON.stringify(newArray));
      
      // Redirect to the output.html page
      window.location.href = "output.html";
      
    };
  });
  