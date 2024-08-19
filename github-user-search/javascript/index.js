import { userData } from "./data.js";

const searchBtn = document.querySelector(".search-btn");
const profileLink = document.querySelector(".profile-link");
const githubProfile = document.querySelector(".github-profile");

const searchUser = () => {
  const username = document.querySelector("#username-input").value.trim();

  if (!username) {
    githubProfile.style.display = "none";
    alert("Username cannot be empty");
    return;
  }
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        githubProfile.style.display = "none";
        alert("User could not find!");
        throw new Error("User could not find.");
      }
      return response.json();
    })
    .then((data) => {
      githubProfile.style.display = "flex";
      Array.from(document.getElementsByClassName("user-data-item")).forEach(
        (element) => {
          element.innerHTML = "";
        }
      );
      userData.forEach((item) => {
        const value = data[item.key];
        const element = document.getElementById(item.key);
        if (element) {
          if (item.key === "avatar_url") {
            const img = document.createElement("img");
            img.src = value;
            img.alt = `${data.login}'s avatar`;
            img.classList.add("avatar");
            element.appendChild(img);
          } else if (item.key === "login") {
            element.innerHTML = `<h2>${value}</h2>`;
          } else {
            element.innerHTML = `<div>${item.label}:</div>  <div>${value}</div>`;
          }
        } else {
          console.error(`Element with id ${item.key} not found.`);
        }
        profileLink.href = data.html_url;
      });
    })
    .catch((error) => {
      console.error("Error fetching user data", error);
    });
};

searchBtn.addEventListener("click", searchUser);
