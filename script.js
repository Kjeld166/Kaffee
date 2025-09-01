async function loadDrinks() {
  try {
    const response = await fetch("data.json"); // gleiche Ebene wie index.html
    if (!response.ok) {
      throw new Error("Datei nicht gefunden");
    }
    const data = await response.json();

    const list = document.getElementById("drink-list");
    data.drinks.forEach(drink => {
      const li = document.createElement("li");
      li.textContent = `${drink.name} - ${drink.size} - ${drink.price.toFixed(2)} €`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
}

loadDrinks();
