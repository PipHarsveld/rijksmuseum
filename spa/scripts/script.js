const display = document.querySelector('main');
const apiKey = "RYeqgpSb";
const url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apiKey;

async function loadArtObjects() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.artObjects;

        data.forEach(function (artObject) {
            // Create a new figure to hold the information for each art object
            const newFigure = document.createElement("figure");

            // Image
            const image = document.createElement("img");
            image.src = artObject.webImage.url;
            newFigure.appendChild(image);

            // Create a figcaption to hold the title and artist
            const figCaption = document.createElement("figcaption");

            // Title
            const title = document.createElement("h2");
            title.textContent = artObject.title;
            figCaption.appendChild(title);

            // Artist
            const artist = document.createElement("p");
            artist.textContent = artObject.principalOrFirstMaker;
            figCaption.appendChild(artist);

            // Append the figcaption to the figure
            newFigure.appendChild(figCaption);

            // Append the new figure to the display
            display.appendChild(newFigure);
        });
    } catch (error) {
        console.log(error);
    }
}

loadArtObjects();
