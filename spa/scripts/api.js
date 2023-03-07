import CONFIG from './config.js';

async function getDetails(objectNumber) {
    try {
        console.log("GETTING DETAILS")
        const url = "https://www.rijksmuseum.nl/api/nl/collection/" + objectNumber + "?key=" + CONFIG.apiKey;

        const response = await fetch(url);

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json();
            const data = json.artObject;
            console.log(data);
            return data;
        } else {
            return "error";
        }
    } catch (error) {
        console.log(error);
    }
}


async function getAllArtworks() {
    try {
        console.log("GETTING ALL ARTWORKS")
        const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}`;

        const response = await fetch(url);

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json();
            const data = json.artObjects;
            return data;
        } else {
            return "error";
        }
    } catch (error) {
        console.log(error);
    }
}

async function getSpecificArtworks(objectType) {
    try {
        console.log("GETTING PAINTINGS")
        const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}&type=${objectType}`;

        const response = await fetch(url);

        if (response.status >= 200 && response.status <= 299) {
            const json = await response.json();
            const data = json.artObjects;
            return data;
        } else {
            return "error";
        }
    } catch (error) {
        console.log(error);
    }
}




export default {
    getDetails,
    getAllArtworks,
    getSpecificArtworks,
}