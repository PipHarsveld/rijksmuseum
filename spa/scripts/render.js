import api from "./api.js"

const display = document.querySelector('main');

function render(data) {
  display.textContent = "";

  if (data === "error") {
    // doe dingen
    console.log('pure paniek gap');
    return false;
  } else {
    data.forEach(async function (artObject) {
      console.log(artObject.objectNumber);
      api.getDetails(artObject.objectNumber);
      console.log(artObject.description);

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
      objectType.textContent = artObject.objectTypes;
      description.textContent = artObject.description;

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
}

function renderOnboarding(data) {
  display.textContent = "";

  if (data === "error") {
    // doe dingen
    console.log('pure paniek gap');
    return false;
  } else {
    const container = document.createElement("section");
    const welcomeText = document.createElement("h2");
    const introduction = document.createElement("p");
    const explanationSwiping = document.createElement("p");
    const explanationIcons = document.createElement("p");
    const explanationSearch = document.createElement("p");
    const buttonNext = document.createElement("a");

    welcomeText.textContent = "Welkom bij de app van het Rijksmuseum!";
    introduction.textContent = "Hier kun je alle kunst van het Rijksmuseum bekijken vanuit je luie stoel!";
    explanationSwiping.textContent = "Op de homepagina vind je verschillende kunstwerken, die je kunt bewonderen door naar links te swipen. Op die manier scroll je door alle kunstwerken heen.";
    explanationIcons.textContent = "Zin om alleen naar schilderijen te kijken? Klik dan op het tweede icoontje onderin met de schilderijenlijst. Meer zin in sculpturen? Ook dat kan! Deze vind je via het derde icoontje met het beeldhouwwerk.";
    explanationSearch.textContent = "Mocht je opzoek zijn naar een specifiek kunstwerk, dan kun je via het vierde icoontje (het vergrootglas) naar de zoekpagina gaan.";
    buttonNext.href = "#home";
    buttonNext.textContent = "Bekijk de kunst";

    display.appendChild(container);

    container.appendChild(welcomeText);
    container.appendChild(introduction);
    container.appendChild(explanationSwiping);
    container.appendChild(explanationIcons);
    container.appendChild(explanationSearch);
    container.appendChild(buttonNext);
  }
}

export default {
  render,
  renderOnboarding
}
