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

        console.log(data)

        // Zelfde als de bovenste 3 regels, alleen dan op een andere manier geschreven.
        // fetch(url)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data.artObjects)
        // })

        // Loop through each art object and create a new <article> element
        data.forEach(async function (artObject) {
            const url = "https://www.rijksmuseum.nl/api/nl/collection/" + artObject.objectNumber + "?key=" + apiKey;

            const response = await fetch(url)
            const data = await response.json();

            console.log(data)

            const newFigure = document.createElement("article");

            // Image
            const image = document.createElement("img");
            image.src = artObject.webImage.url;
            // Append the <img> element to the <article> element
            newFigure.appendChild(image);

            // Title
            const title = document.createElement("h2");
            title.textContent = artObject.title;
            newFigure.appendChild(title);

            // Artist
            const artist = document.createElement("p");
            artist.textContent = artObject.principalOrFirstMaker;
            newFigure.appendChild(artist);

            // Create a section to hold the tags
            const tagContainer = document.createElement("ul");
            const listItem = document.createElement("li");

            // Object Type
            const objectType = document.createElement("p");
            objectType.textContent = artObject.objectTypes; // WERKT NIET!!!!!!!!!
            listItem.appendChild(objectType);

            tagContainer.appendChild(listItem);

            // Append the tags section to the article
            newFigure.appendChild(tagContainer);

            // Description
            const description = document.createElement("p");
            description.textContent = artObject.titles;  // WERKT NIET!!!!!!!!!
            newFigure.appendChild(description);

            // Append the new figure to the display
            display.appendChild(newFigure);
        });
    } catch (error) {
        console.log(error);
    }
}

// Call the loadArtObjects() function to display the art objects
loadArtObjects();
