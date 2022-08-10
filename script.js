var cards = document.querySelectorAll(".card");
var twins = document.querySelectorAll(".twin");
var moves = document.querySelector(".moves");
let isFlipped = false;
let firstCard = null;
let secondCard = null;
let count = 0;

function isMatched() {
  if (firstCard.dataset.twin === secondCard.dataset.twin) {
    success();
  } else {
    fail();
  }
}

function success() {
  // firstCard.removeEventListener("click");
  // secondCard.removeEventListener("click");
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 600);
}

function reset() {
  console.log(firstCard, secondCard);
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function flip() {
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    firstCard.classList.add("flip");
    count = count + 1;
    moves.innerText = `Moves : ${count}`;

    // console.log(card.dataset.twin);
  } else {
    secondCard = this;
    secondCard.classList.add("flip");
    count = count + 1;
    moves.innerText = `Moves : ${count}`;
    isMatched();
  }
}

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

function shuffle() {
  twins.forEach((twin) => {
    var randomNumber = Math.floor(Math.random() * 16 + 1);
    twin.style.order = randomNumber;
    console.log(twin.style.order);
  });
}

shuffle();
