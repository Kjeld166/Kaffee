async function loadDrinks() {
  // URL zur drinks.json auf GitHub (achte auf den RAW-Link!)
  const url = "https://kjeld166.github.io/Test/drinks.json";

  try {
    const response = await fetch(url);
    const drinks = await response.json();

    const list = document.getElementById("drink-list");
    list.innerHTML = "";

    drinks.forEach(drink => {
      const li = document.createElement("li");
      li.textContent = `${drink.name} – ${drink.size} – ${drink.price.toFixed(2)} €`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Fehler beim Laden:", err);
  }
}

loadDrinks();
