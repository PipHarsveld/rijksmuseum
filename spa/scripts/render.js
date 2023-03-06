import CONFIG from './config.js';

const display = document.querySelector('main');

function render(data) {
  display.textContent = "";

  if(data === "error") {
    // doe dingen
    console.log('pure paniek gap');
    return false;
  }

//   data = JSON.parse(data);

  data.forEach(async function (artObject) {
    const url = "https://www.rijksmuseum.nl/api/nl/collection/" + artObject.objectNumber + "?key=" + CONFIG.apiKey;

    const response = await fetch(url)
    const json = await response.json();

    const newFigure = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const artist = document.createElement("h3");
    const tagContainer = document.createElement("ul");
    const listItem = document.createElement("li");
    const objectType = document.createElement("p");
    const description = document.createElement("p");

    image.src = artObject.webImage.url;
    title.textContent = artObject.title;
    artist.textContent = artObject.principalOrFirstMaker;
    objectType.textContent = json.artObject.objectTypes;
    description.textContent = json.artObject.titles;

    newFigure.appendChild(image);
    newFigure.appendChild(title);
    newFigure.appendChild(artist);
    listItem.appendChild(objectType);
    tagContainer.appendChild(listItem);
    newFigure.appendChild(tagContainer);
    newFigure.appendChild(description);

    display.appendChild(newFigure);
  });
}

  export default render;

  