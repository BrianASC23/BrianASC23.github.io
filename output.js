document.addEventListener("DOMContentLoaded", function () {
  let resultsContainer = document.getElementById("results");
  const matchingDiseases = localStorage.getItem("newArray");
  const newArray = JSON.parse(matchingDiseases);

  if (newArray && newArray.length > 0) {
    resultsContainer.textContent = "Matching Diseases: " + newArray.join(", ");
  } else {
    resultsContainer.textContent = "No matching diseases found.";
  }
});
