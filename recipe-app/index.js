const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.querySelector(".result-container");
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchForMeal = () => {
  const userInput = searchInput.value.trim();
  fetchData(userInput);
};

const isInputValid = () => searchInput.value.trim() !== "";
const cleanInput = () => (searchInput.value = "");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isInputValid()) {
    cleanInput();
    searchForMeal();
    return;
  }
  alert("PLease enter a dish name.");
});

const fetchData = async (userInput) => {
  try {
    const response = await fetch(API_URL + userInput);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data.");
  }
};
