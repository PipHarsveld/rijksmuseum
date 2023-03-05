const apiKey = "RYeqgpSb";
const baseURL = "https://www.rijksmuseum.nl/api/nl/collection?key=" + apiKey;

async function getData(objectType) {
  try {
    const url = baseURL + "&objecttype=" + objectType;
    const response = await fetch(url);

    if (response.status >= 200 && response.status <= 299) {
      const json = await response.json();
      const data = json.artObjects;
      return data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export default getData;
