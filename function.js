function askName() {
    var playerName = prompt("Enter your name");
    document.querySelector('.playerName').innerHTML = playerName;
}

function generateRandom() {
    var num1 = parseInt(Math.random() * 6) + 1;
    var num2 = parseInt(Math.random() * 6) + 1;

    for(var i=1; i<10; i++) {
        document.querySelector(".box1 .circle"+i).classList.remove("display-show");
        document.querySelector(".box2 .circle"+i).classList.remove("display-show");
    }

    switch(num1) {
        case 1:
            document.querySelector(".box1 .circle5").classList.add("display-show");
            break;

        case 2:
            document.querySelector(".box1 .circle1").classList.add("display-show");
            document.querySelector(".box1 .circle9").classList.add("display-show");
            break;

        case 3:
            document.querySelector(".box1 .circle1").classList.add("display-show");
            document.querySelector(".box1 .circle5").classList.add("display-show");
            document.querySelector(".box1 .circle9").classList.add("display-show");
            break;

        case 4:
            document.querySelector(".box1 .circle1").classList.add("display-show");
            document.querySelector(".box1 .circle3").classList.add("display-show");
            document.querySelector(".box1 .circle7").classList.add("display-show");
            document.querySelector(".box1 .circle9").classList.add("display-show");
            break;

        case 5:
            document.querySelector(".box1 .circle1").classList.add("display-show");
            document.querySelector(".box1 .circle3").classList.add("display-show");
            document.querySelector(".box1 .circle5").classList.add("display-show");
            document.querySelector(".box1 .circle7").classList.add("display-show");
            document.querySelector(".box1 .circle9").classList.add("display-show");
            break;

        case 6:
            document.querySelector(".box1 .circle1").classList.add("display-show");
            document.querySelector(".box1 .circle3").classList.add("display-show");
            document.querySelector(".box1 .circle4").classList.add("display-show");
            document.querySelector(".box1 .circle6").classList.add("display-show");
            document.querySelector(".box1 .circle7").classList.add("display-show");
            document.querySelector(".box1 .circle9").classList.add("display-show");
            break;
            
    }

    switch(num2) {
        case 1:
            document.querySelector(".box2 .circle5").classList.add("display-show");
            break;

        case 2:
            document.querySelector(".box2 .circle1").classList.add("display-show");
            document.querySelector(".box2 .circle9").classList.add("display-show");
            break;

        case 3:
            document.querySelector(".box2 .circle1").classList.add("display-show");
            document.querySelector(".box2 .circle5").classList.add("display-show");
            document.querySelector(".box2 .circle9").classList.add("display-show");
            break;

        case 4:
            document.querySelector(".box2 .circle1").classList.add("display-show");
            document.querySelector(".box2 .circle3").classList.add("display-show");
            document.querySelector(".box2 .circle7").classList.add("display-show");
            document.querySelector(".box2 .circle9").classList.add("display-show");
            break;

        case 5:
            document.querySelector(".box2 .circle1").classList.add("display-show");
            document.querySelector(".box2 .circle3").classList.add("display-show");
            document.querySelector(".box2 .circle5").classList.add("display-show");
            document.querySelector(".box2 .circle7").classList.add("display-show");
            document.querySelector(".box2 .circle9").classList.add("display-show");
            break;

        case 6:
            document.querySelector(".box2 .circle1").classList.add("display-show");
            document.querySelector(".box2 .circle3").classList.add("display-show");
            document.querySelector(".box2 .circle4").classList.add("display-show");
            document.querySelector(".box2 .circle6").classList.add("display-show");
            document.querySelector(".box2 .circle7").classList.add("display-show");
            document.querySelector(".box2 .circle9").classList.add("display-show");
            break;
    }

    if(num1 > num2) {
        document.querySelector(".result").textContent = "You won !"
    } else if (num1 < num2){
        document.querySelector(".result").textContent = "Computer won !"
    } else {
        document.querySelector(".result").textContent = "It's a tie !"
    }
}

document.querySelector("button").addEventListener('click', generateRandom);