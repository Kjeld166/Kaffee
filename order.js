async function loadDrinks() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Datei nicht gefunden");

    const data = await response.json();
    const list = document.getElementById("drink-list");

    data.drinks.forEach(drink => {
      const li = document.createElement("li");
      li.textContent = drink.name + " ";

      // Button hinzufügen
      const btn = document.createElement("button");
      btn.textContent = "Hinzufügen";
      btn.addEventListener("click", () => {
        addToOrder(drink.name);
      });

      li.appendChild(btn);
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
}

function addToOrder(drink) {
  // Vorhandene Bestellungen aus localStorage holen
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(drink);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert(drink + " wurde hinzugefügt!");
}

loadDrinks();

