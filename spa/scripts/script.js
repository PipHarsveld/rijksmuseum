const display = document.querySelector('main');
const apiKey = "RYeqgpSb";
const url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apiKey;

// Define an asynchronous function to load the art objects
async function loadArtObjects() {
    try {
        // Use the fetch() method to make an API request to the Rijksmuseum API
        const response = await fetch(url);

        // Parse the JSON response into a JavaScript object
        const json = await response.json();

        // Extract the art objects from the JSON response
        const data = json.artObjects;

        // Loop through each art object and create a new <figure> element
        data.forEach(function (artObject) {
            const newFigure = document.createElement("figure");

            // Image
            const image = document.createElement("img");
            image.src = artObject.webImage.url;
            // Append the <img> element to the <figure> element
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

// Call the loadArtObjects() function to display the art objects
loadArtObjects();
