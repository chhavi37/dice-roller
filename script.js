
function rollDice() {
    const numOfDice = Number(
        document.getElementById("numOfDice").value
    );

    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    if (!Number.isInteger(numOfDice) || numOfDice < 1) {
        diceResult.textContent = "Please enter a valid number!";
        diceImages.innerHTML = "";
        return;
    }

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);

        images.push(
            `<img src="${value}.png" alt="Dice ${value}">`
        );
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}

