let cards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "Joker"
];

// Genera un número aleatorio
function randomCard() {
  let randomResult = Math.floor(Math.random() * cards.length);
  return cards[randomResult];
}

// Seleccionamos una carta con simbolo aleatorio
function showRandomCard() {
  // Array con los contenedores de las cartas
  let cardContainers = [
    "card1-container",
    "card2-container",
    "card3-container",
    "card4-container"
  ];

  // Ocultamos todas las cartas
  cardContainers.forEach(card => {
    document.getElementById(card).style.display = "none";
  });

  // Seleccionamos una carta aleatoria
  let randomSymbol = Math.floor(Math.random() * cardContainers.length);
  let randomCardContainer = cardContainers[randomSymbol];

  // Obtenemos la carta aleatoria
  let selectedCard = randomCard();

  // Si se elige la carta del "Joker", pasan cositas.
  if (selectedCard === "Joker") {
    // Mostramos la carta seleccionada aleatoriamente
    document.getElementById(randomCardContainer).style.display = "block";

    //  Se ocultaram todos los simbolos y la letra sera mas pequeña
    let cardNumberId = `numberOfCard${randomSymbol + 1}`;
    let cardNumberElement = document.getElementById(cardNumberId);
    cardNumberElement.innerText = selectedCard;
    cardNumberElement.style.fontSize = "5.5rem";

    // Ocultamos los símbolos para el Joker
    let symbols = document.querySelectorAll(
      `#${randomCardContainer} .fa-solid`
    );
    symbols.forEach(symbol => {
      symbol.style.display = "none";
    });

    return; // Salimos de la función inmediatamente si es un Joker
  }

  // Si no es un Joker, seguimos con el proceso normal
  document.getElementById(randomCardContainer).style.display = "block";

  // Actualizamos el número de la carta
  let cardNumberId = `numberOfCard${randomSymbol + 1}`;
  let cardNumberElement = document.getElementById(cardNumberId);
  cardNumberElement.innerText = selectedCard;
  cardNumberElement.style.fontSize = ""; // Restauramos el tamaño predeterminado

  // Mostramos los símbolos para cualquier otra carta
  let symbols = document.querySelectorAll(`#${randomCardContainer} .fa-solid`);
  symbols.forEach(symbol => {
    symbol.style.display = ""; // Restauramos la visibilidad predeterminada
  });
}

// Llamamos a la función para mostrar una carta aleatoria al cargar la página
showRandomCard();
