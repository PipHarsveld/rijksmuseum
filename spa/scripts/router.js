// Import modules
import render from "./render.js";
import api from "./api.js";

function router() {
    // Check hash
    const hash = window.location.hash.slice(1);

    const display = document.querySelector('main');

    switch (hash) {
        //If hash = empty
        case "":
            display.textContent = "Welkom!";
            render.renderOnboarding();
            break;
        //If hash = /#home
        case "home":
            display.textContent = "Even geduld, de kunstwerken worden geladen.";
            api.getAllArtworks().then(data => {
                render.render(data);
            })
            break;
        //If hash = /#schilderijen
        case "schilderijen":
            display.textContent = "Even geduld, de schilderijen worden geladen.";
            api.getSpecificArtworks("schilderij").then(data => {
                render.render(data);
            })
            break;
        //If hash = /#sculturen
        case "sculpturen":
            display.textContent = "Even geduld, de sculpturen worden geladen.";
            api.getSpecificArtworks("beeldhouwwerk").then(data => {
                render.render(data);
            })
            break;
        //If hash = /#zoeken
        case "zoeken":
            display.textContent = "Even geduld, u kunt zo zoeken";
            //Create html search form
            render.renderSearch();
            break;
        default:
    }
};

//Call the router funtion when the hash is changed
window.addEventListener('hashchange', router);

//Export modules
export default router;
