document.addEventListener("DOMContentLoaded", function () {
  let userInput = document.getElementById("symptomInput");
  let button = document.getElementById("btn");
  let symptomList = document.getElementById("symptomList");
  let symptoms = Symptoms; // Import the symptoms list from Symptoms.js
  let diseases = Diseases; // Import the diseases list from Diseases.js

  // Populate the datalist with autocomplete options //Maybe add onchange or oninput or on keyUp
  symptoms.forEach(symptom => {
    let option = document.createElement("option");
    option.value = symptom;
    symptomList.appendChild(option);
  });

  button.onclick = function (event) {
    event.preventDefault();
    let selectedSymptoms = userInput.value.toLowerCase().split(", ");
    //Checks if it splits
    console.log(selectedSymptoms);
    let matchingDiseases = [];
      
    for (let i = 0; i < diseases.length; i++) {
      for(let j = 0; j < diseases[i].symptoms.length; j++){
      let matchedSymptoms = diseases[i].symptoms[j].includes(symptoms =>
        selectedSymptoms.includes(symptoms.toLowerCase())
      
      );


      if (matchedSymptoms.length === diseases[i].symptoms[j].length) {
        matchingDiseases.push(diseases[i].name);
      }
    }
  }

    // Construct the URL with parameters
    //let url = `output.html?matchingDiseases=${encodeURIComponent(JSON.stringify(matchingDiseases))}`;
    //window.location.href = url;
  };
});
