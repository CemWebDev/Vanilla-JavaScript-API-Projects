const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

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

