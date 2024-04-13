//her vælger jeg hvor mit indhold skal være i forhold til mit html 
const sectionEl = document.querySelector(".nasaImg");
//her indsætter jeg nasa's api og vælger at det 6 random billeder fra api'et
const url = "https://api.nasa.gov/planetary/apod?api_key=a55VilqUJBl9VAUiB8xdliWZQb5QpnKn9gcXhbD3&count=6";

//i ned stående funktion henter og omskriver jeg json til js - arry & object. 
//awaits veter på servern 
//til slut i funktionen læser den om alt er ok 
//ved godt at jeg ikke har lavet en catch, men blev usikker på det
async function fetchStuff() {
        const res = await fetch(url);
        const data = await res.json();
        nasaPicks(data); 
    }
fetchStuff();

//i nedstående funktion modtager den dataen og behandler den 
//den looper igennem billederne med foreach 
//i sectionEl.innerHTML laver den de html elementer som jeg bedren den om 
function nasaPicks(nasaPics) {
    nasaPics.forEach(nasaPic => {
      sectionEl.innerHTML += `
      <article>
      <img src="${nasaPic.url}" alt="${nasaPic.title}">
      <h2>${nasaPic.title}</h2>
      <p>${nasaPic.date}</p>
      <p>${nasaPic.explanation}</p>
  </article>
      `
    });
}

