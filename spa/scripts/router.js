import render from "./render.js";
import api from "./api.js";

function router() {
    const hash = window.location.hash.slice(1);
    const display = document.querySelector('main');

    switch (hash) {
        case "":
            display.textContent = "Welkom!";
            render.renderOnboarding();
            break;
        case "home":
            display.textContent = "Even geduld, de kunstwerken worden geladen.";
            api.getAllArtworks().then(data => {
                render.render(data);
            })
            break;
        case "schilderijen":
            display.textContent = "Even geduld, de schilderijen worden geladen.";
            api.getSpecificArtworks("schilderij").then(data => {
                render.render(data);
            })
            break;
        case "sculpturen":
            display.textContent = "Even geduld, de sculpturen worden geladen.";
            api.getSpecificArtworks("beeldhouwwerk").then(data => {
                render.render(data);
            })
            break;
        case "zoeken":
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
            break;
        default:
    }
};

window.addEventListener('hashchange', router);


export default router;
