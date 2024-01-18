/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", function () {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((users) => {
      const output = document.getElementById("output");
      output.innerHTML = ""; // Išvaloma pradinė žinutė
      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}">
                    <p>${user.login}</p>
                `;
        output.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      output.textContent = "Klaida gaunant duomenis.";
    });
});
