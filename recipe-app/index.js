const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchForMeal = () => {
  console.log("hello");
};

const cleanInput = () => {
  searchInput.value = "";
};

searchBtn.addEventListener("click", searchForMeal);
searchInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    cleanInput();
    searchForMeal();
  }
});

const fetchData = async () => {
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
fetchData();
