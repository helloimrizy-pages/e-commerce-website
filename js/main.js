function flipCard(container) {
    let cardFront = container.querySelector('.card-front');
    let cardBack = container.querySelector('.card-back');
    // Check if the card is already flipped
    if (cardFront.style.transform === "rotateY(180deg)") {
        cardFront.style.transform = "rotateY(0deg)";
        cardBack.style.transform = "rotateY(-180deg)";
    } else {
        cardFront.style.transform = "rotateY(180deg)";
        cardBack.style.transform = "rotateY(0deg)";
    }
}
