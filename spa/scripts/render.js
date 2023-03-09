// Import modules
import api from "./api.js"

const display = document.querySelector('main');

function render(data) {
  // Remove loading states
  display.textContent = "";

  if (data === "error") {
    display.textContent = "Oeps! Er is iets foutgegaan. Laad de pagina opnieuw.";
    return false;
  } else {
    // Create for each artobject that is found the following html
    data.forEach(async function (artObject) {

      // Create variables with html tags
      const details = await api.getDetails(artObject.objectNumber);
      const newFigure = document.createElement("article");
      const image = document.createElement("img");
      const title = document.createElement("h2");
      const artist = document.createElement("h3");
      const tagContainer = document.createElement("ul");
      const listItem = document.createElement("li");
      const objectType = document.createElement("p");
      const description = document.createElement("p");

      // Add value to the variables
      image.src = artObject.webImage.url;
      title.textContent = artObject.title;
      artist.textContent = artObject.principalOrFirstMaker;
      objectType.textContent = details.objectTypes;
      description.textContent = details.plaqueDescriptionDutch;

      // Show the variables to create html
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
    display.textContent = "Oeps! Er is iets foutgegaan. Laad de pagina opnieuw.";
    return false;
  } else {
    // Create variables with html tags
    const container = document.createElement("section");
    const welcomeText = document.createElement("h2");
    const explanationSwiping = document.createElement("p");
    const explanationIcons = document.createElement("p");
    const explanationSearch = document.createElement("p");
    const buttonNext = document.createElement("a");

    // Add value to the variables
    container.className = "onboardingPage";
    welcomeText.textContent = "Welkom bij de app van het Rijksmuseum!";
    explanationSwiping.textContent = "Op de homepagina vind je verschillende kunstwerken, die je kunt bewonderen door naar links te swipen. Op die manier scroll je door alle kunstwerken heen.";
    explanationIcons.textContent = "Zin om alleen naar schilderijen te kijken? Klik dan op het tweede icoontje onderin met de schilderijenlijst. Meer zin in sculpturen? Ook dat kan! Deze vind je via het derde icoontje met het beeldhouwwerk.";
    explanationSearch.textContent = "Mocht je opzoek zijn naar een specifiek kunstwerk, dan kun je via het vierde icoontje (het vergrootglas) naar de zoekpagina gaan.";
    buttonNext.href = "#home";
    buttonNext.textContent = "Bekijk de kunst";

    // Show the variables to create html
    display.appendChild(container);
    container.appendChild(welcomeText);
    container.appendChild(explanationSwiping);
    container.appendChild(explanationIcons);
    container.appendChild(explanationSearch);
    container.appendChild(buttonNext);
  }
}

function renderSearch() {
  display.textContent = "";
  display.innerHTML = `
    <div class="zoekpagina">
        <h2>Zoek Kunstwerken</h2>
        <form id="search-form">
            <label for="search-input">Zoekterm:</label>
            <input type="text" id="search-input" name="search-input">
            <button type="submit">Zoeken</button>
        </form>
    </div>
    `;

}


//Export modules
export default {
  render,
  renderOnboarding,
  renderSearch
}
