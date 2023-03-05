function router() {
    const hash = window.location.hash.slice(1);
    const display = document.querySelector('main');
  
    if (hash === "") {
      display.textContent = "Even geduld, de kunstwerken worden geladen.";
      loadArtObjects();
    } else if (hash === "schilderijen") {
      display.textContent = "Even geduld, de schilderijen worden geladen.";
      loadArtObjects("schilderij");
    } else if (hash === "sculpturen") {
      display.textContent = "Even geduld, de sculpturen worden geladen.";
      loadArtObjects("sculptuur");
    } else if (hash === "zoeken") {
      display.textContent = "Even geduld, u kunt zo zoeken";
      display.innerHTML = `
        <h2>Zoek Kunstwerken</h2>
        <form id="search-form">
          <label for="search-input">Zoekterm:</label>
          <input type="text" id="search-input" name="search-input">
          <button type="submit">Zoeken</button>
        </form>
      `;
    } else {
      display.textContent = "Ongeldige hash: " + hash;
    }
  }


  window.addEventListener('hashchange', router);


  export default router;
