/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  fetch("cars.json")
    .then((response) => response.json())
    .then((cars) => {
      const output = document.getElementById("output");
      output.innerHTML = "";

      cars.forEach((car) => {
        const brandCard = document.createElement("div");
        brandCard.className = "brand-card";

        const brandName = document.createElement("div");
        brandName.className = "brand-name";
        brandName.textContent = car.brand;
        brandCard.appendChild(brandName);

        const modelList = document.createElement("ul");
        car.models.forEach((model) => {
          const listItem = document.createElement("li");
          listItem.textContent = model;
          modelList.appendChild(listItem);
        });

        brandCard.appendChild(modelList);
        output.appendChild(brandCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      output.textContent = "Klaida gaunant duomenis.";
    });
});
