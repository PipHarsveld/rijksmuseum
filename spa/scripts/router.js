import render from "./render.js";
import api from "./api.js";

function router(data) {
    const hash = window.location.hash.slice(1);
    const display = document.querySelector('main');

    switch (hash) {
        case "":
            display.textContent = "Welkom bij deze mooie app";
            render.renderOnboarding();
            break;
        case "home":
            console.log("home");
            display.textContent = "Even geduld, de kunstwerken worden geladen.";
            api.getAllArtworks().then(data => {
                console.log(data);
                render.render(data);
                console.log("loaded all artworks");
            })
            break;
        case "schilderijen":
            console.log("schilderijen")
            display.textContent = "Even geduld, de schilderijen worden geladen.";
            api.getSpecificArtworks("schilderij").then(data => {
                console.log(data);
                render.render(data);
                console.log("loaded paintings");
            })
            break;
        case "sculpturen":
            console.log("sculpturen")
            display.textContent = "Even geduld, de sculpturen worden geladen.";
            api.getSpecificArtworks("beeldhouwwerk").then(data => {
                console.log(data);
                render.render(data);
                console.log("loaded sculptures");
            })
            break;
        case "zoeken":
            display.textContent = "Even geduld, u kunt zo zoeken";
            api.getAllArtworks().then(data => {
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
            })
            break;
        default:
            console.log("error");
    }
};



// if (hash === "") {
//     display.textContent = "Even geduld, de kunstwerken worden geladen.";
//     render();
// }
// else if (hash === "schilderijen") {
//     display.textContent = "Even geduld, de schilderijen worden geladen.";
//     render("schilderij");
// } else if (hash === "sculpturen") {
//     display.textContent = "Even geduld, de sculpturen worden geladen.";
//     render("sculptuur");
// } else if (hash === "zoeken") {
//     display.textContent = "Even geduld, u kunt zo zoeken";
//     display.innerHTML = `
//     <h2>Zoek Kunstwerken</h2>
//     <form id="search-form">
//       <label for="search-input">Zoekterm:</label>
//       <input type="text" id="search-input" name="search-input">
//       <button type="submit">Zoeken</button>
//     </form>
//   `;
// }
// else {
//     display.textContent = "Ongeldige hash: " + hash;
// }



// function test(){
//     const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}&s=schilderijen`;
//     const data = fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         render(data)
//     })
//     .catch((err) => console.log(err));

//     // const response = fetch(url);

//     // const json = response.json();
//     // const data = json.artObjects;

//     return data;
// }

window.addEventListener('hashchange', router);


export default router;
