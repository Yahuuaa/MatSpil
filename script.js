let x = 0, y = 0;
let svar1 = 0, svar2 = 0;
let tegn = "+", timer = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    nytTegn();
}

function draw() {
    background(265);

    textSize(60);
    let txt = `Hvad giver ${x} ${tegn} ${y}?`   ;
    text(txt, (windowWidth - textWidth(txt)) / 2, windowHeight * 0.2);
    
    noStroke();
    fill(100, 100, 100, 150); 
    rect(windowWidth * 0.33 - windowWidth * 0.3 / 2, windowHeight * 0.5 - windowHeight * 0.2 / 2, windowWidth * 0.3, windowHeight * 0.2);
    rect(windowWidth * 0.66 - windowWidth * 0.3 / 2, windowHeight * 0.5 - windowHeight * 0.2 / 2, windowWidth * 0.3, windowHeight * 0.2);
        
    textSize(40);
    fill(0)
    text(svar1, windowWidth * 0.33 - textWidth(svar1) / 2, windowHeight * 0.5 + 10);
    text(svar2, windowWidth * 0.66 - textWidth(svar2) / 2, windowHeight * 0.5 + 10);

}

function mousePressed() {
    if (mouseX > windowWidth * 0.33 - windowWidth * 0.3 / 2 && mouseX < windowWidth * 0.33 + windowWidth * 0.3 / 2 && mouseY > windowHeight * 0.5 - windowHeight * 0.2 / 2 && mouseY < windowHeight * 0.5 + windowHeight * 0.2 / 2) {
        if (svar1 == eval(x + tegn + y)) {
            nytTegn();
        } else {
            alert("Det svar er forkert!");
        }
    } else if (mouseX > windowWidth * 0.66 - windowWidth * 0.3 / 2 && mouseX < windowWidth * 0.66 + windowWidth * 0.3 / 2 && mouseY > windowHeight * 0.5 - windowHeight * 0.2 / 2 && mouseY < windowHeight * 0.5 + windowHeight * 0.2 / 2) {
        if (svar2 == eval(x + tegn + y)) {
            nytTegn();
        } else {
            alert("Det svar er forkert!");
        }   
    }
}

function nytTegn() {
    let tal = Math.random() * 3;
    if (tal < 1) {
        tegn = "+";
    } else if (tal < 2) {
        tegn = "-";
    } else {
        tegn = "*";
    }

    x = Math.floor(Math.random() * 99 + 1);
    y = Math.floor(Math.random() * 99 + 1);

    tal = Math.random() * 2;
    if (tal < 1) {
        svar1 = eval(x + tegn + y);
        svar2 = Math.floor(Math.random() * 198 + 1);
    } else {
        svar1 = Math.floor(Math.random() * 198 + 1);
        svar2 = eval(x + tegn + y);
    }
}