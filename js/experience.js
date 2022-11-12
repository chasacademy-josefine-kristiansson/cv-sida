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
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}
getSomething();
