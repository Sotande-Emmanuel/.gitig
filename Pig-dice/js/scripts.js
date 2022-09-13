let images = ["./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png"];
let dice = document.querySelectorAll("img");
function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    })
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        })
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        console.log(dieOneValue, dieTwoValue);
        document.querySelector("#dice1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#dice2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "<b> Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
        1000
    );
}

