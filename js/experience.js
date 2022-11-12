/* const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.Year;
};
xmlhttp.open("GET", "experience.json");
xmlhttp.send();
 */
/* const listEl = document.querySelector(ul);
fetch("js/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((year) => {
      listEl.insertAdjacentHTML("beforeend", `<li>${post.year}</li>`);
    });
  });
 */
let url = "./data.json";
const myList = document.getElementById("arbetserfarenheter");
const myListTwo = document.getElementById("utbildningar");

async function getSomething() {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    let Year = data.Arbetserfarenheter;
    let Title = data.Arbetserfarenheter[1];
    console.log(Title);

    let Arbetserfarenheter = data.Arbetserfarenheter;
    Arbetserfarenheter.forEach(function (Arbetserfarenheter) {
      myList.innerHTML += `<li>${Arbetserfarenheter.Year}</li>`;
      myList.innerHTML += `<li>${Arbetserfarenheter.Title}</li>`;
      myList.innerHTML += `<li>${Arbetserfarenheter.Location}</li>`;
      myList.innerHTML += `<li>${Arbetserfarenheter.Description}</li>`;
    });
    let Utbildningar = data.Utbildningar;
    Utbildningar.forEach(function (Utbildningar) {
      myListTwo.innerHTML += `<li>${Utbildningar.Year}</li>`;
      myListTwo.innerHTML += `<li>${Utbildningar.Education}</li>`;
      myListTwo.innerHTML += `<li>${Utbildningar.School}</li>`;
    });
    /* console.log(Utbildningar); */

    /* for (let i = 0; i < Year.length; i++) {
      console.log("i: ", i);
      let li = document.createElement("li");
      li.innerHTML = Year[i];
      console.log("myList.innerHTML: ", myList.innerHTML);
      myList.innerHTML += `<li>"${Year.Arbetserfarenheter[i].Year}</li>`;
      console.log("li: ", li);
    } */
    // Hämta vald data (objekt, array)
    // Lägg till i DOM:en efter preferenser
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}
getSomething();
