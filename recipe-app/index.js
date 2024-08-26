const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchForMeal = () => {
  console.log(searchInput.value);
};

const isInputValid = () => searchInput.value.trim() !== "";
const cleanInput = () => (searchInput.value = "");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isInputValid()) {
    console.log(searchInput.value);
    cleanInput();
    return;
  }
  alert("PLease enter a dish name.");
});

/* const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
};
fetchData(); */
