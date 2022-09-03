var cards = document.querySelectorAll(".card");
var twins = document.querySelectorAll(".twin");
var count = document.querySelector("#count");
let isFlipped = false;
let firstCard = null;
let secondCard = null;
let flag = 0;
let flippedCard = null;

function isMatched() {
  if (firstCard.dataset.twin === secondCard.dataset.twin) {
    success();
  } else {
    fail();
  }
}

function success() {
  flippedCard = null;
  console.log(flippedCard);
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");
  reset();
}

function fail() {
  flippedCard = null;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 400);
}

function reset() {
  // console.log(firstCard, secondCard);
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function flip() {
  if (flippedCard === this) {
    // Cannot flip the card which is already flipped
    console.log("Flip a different card");
    return;
  }
  if (this.classList.contains("matched")) {
    // If cards matched already then they cannot be used again
    console.log("Don't flip the matched cards");
    return;
  }
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    flippedCard = this;
    firstCard.classList.add("flip");
    flag = flag + 1;
    count.innerText = `${flag}`;

    // console.log(card.dataset.twin);
  } else {
    secondCard = this;
    secondCard.classList.add("flip");
    flag = flag + 1;
    count.innerText = `${flag}`;
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
    // console.log(twin.style.order);
  });
}

shuffle();
