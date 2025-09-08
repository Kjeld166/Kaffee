async function loadDrinks() {
  try {
    console.log("Starte fetch...");
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Datei nicht gefunden");
    }
    console.log("Antwort erhalten", response);
    const data = await response.json();
    console.log("Daten:", data);

    const list = document.getElementById("drink-list");
    data.drinks.forEach(drink => {
      const li = document.createElement("li");
      li.textContent = `${drink.name}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
}

loadDrinks();
