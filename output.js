/*
document.addEventListener("DOMContentLoaded", function () {
  let resultsContainer = document.getElementById("results");

  // Extract the parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const matchingDiseases = localStorage.getItem(JSON.parse(urlParams.get("newArray")));

  if (matchingDiseases && matchingDiseases.length > 0) {
    resultsContainer.textContent = "Matching Diseases: " + matchingDiseases.join(", ");
  } else {
    resultsContainer.textContent = "No matching diseases found.";
  }
});
*/



document.addEventListener("DOMContentLoaded", function () {
  let resultsContainer = document.getElementById("results");

  // Retrieve the data from local storage
  const matchingDiseases = localStorage.getItem("newArray");
  const newArray = JSON.parse(matchingDiseases);

  if (newArray && newArray.length > 0) {
    resultsContainer.textContent = "Matching Diseases: " + newArray.join(", ");
  } else {
    resultsContainer.textContent = "No matching diseases found.";
  }
});
