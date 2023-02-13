let apikey = "RYeqgpSb";
let q = "";
let url = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apikey + q;
const display = document.querySelector('main');

fetch(url).then(function (response) {
    return response.json()
}).then(function (json) {
    let data = json.artObjects;
    console.log(data)

    data.forEach(function(artObject) {
        // Create a new figure to hold the information for each art object
        const newFigure = document.createElement("figure");

        //image
        const image = document.createElement("img");
        image.src = artObject.webImage.url;
        newFigure.appendChild(image);

        // Create a figcaption to hold the title and artist
        const figCaption = document.createElement("figcaption");

        //title
        const title = document.createElement("h2");
        title.textContent = artObject.title;
        figCaption.appendChild(title);

        //artist
        const artist = document.createElement("p");
        artist.textContent = artObject.principalOrFirstMaker;
        figCaption.appendChild(artist);

        // Append the figcaption to the figure
        newFigure.appendChild(figCaption);

        // Append the new figure to the display
        display.appendChild(newFigure);
    });
})
