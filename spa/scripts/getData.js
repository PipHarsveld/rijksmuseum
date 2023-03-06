import CONFIG from './config.js';

async function getData() {
  try {
    // const url = `${CONFIG.baseURL}?key=${CONFIG.apiKey}&objecttype=${objectType}`;
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

export default getData;
