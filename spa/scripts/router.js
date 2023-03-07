// import getData from "./getData.js";
import CONFIG from './config.js';
import render from "./render.js";
import api from "./api.js";
import "./routie.js";

function router(data) {
    // const hash = window.location.hash.slice(1);
    const display = document.querySelector('main');

    routie({
        '': () => {
            display.textContent = "Even geduld, de kunstwerken worden geladen.";
            api.getAllArtworks().then(data => {
                console.log(data)
                render(data)
                console.log("de boosdoener")
            })
            // getData().then(data => {
            //     render(data)
            //     console.log("de boosdoener")
            // })
        },
        'schilderijen': () => {
            display.textContent = "Even geduld, de schilderijen worden geladen.";
            api.getPaintings();

            // const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}&s=schilderijen`;
            // const data = fetch(url)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         render(data)
            //         console.log("schilderijen")
            //     })
            //     .catch((err) => console.log(err));
        },
        'sculpturen': () => {
            display.textContent = "Even geduld, de sculpturen worden geladen.";
            getData().then(data => {
                render(data)
            })
        },
        'zoeken': () => {
            display.textContent = "Even geduld, de sculpturen worden geladen.";
            getData().then(data => {
                display.textContent = "Even geduld, u kunt zo zoeken";
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
        }
    });

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
}


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
