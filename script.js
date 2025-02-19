let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");

let fotoOne = document.getElementById("james-image");
let fotoTwo = document.getElementById("tiana-image");
let fotoThree = document.getElementById("taslan-image");

let firstTitle = document.getElementById("first-title");
let secondTitle = document.getElementById("second-title");
let thirdTitle = document.getElementById("third-title");

let firstJob = document.getElementById("first-job");
let secondJob = document.getElementById("second-job");
let thirdJob = document.getElementById("third-job");



btnOne.addEventListener("click", function() {
    fotoOne.src = "/images/recommendations/james.png";
    fotoOne.alt = "James";
    firstTitle.textContent = "James Gouse";
    firstJob.textContent = "Graphic Designer";

    fotoTwo.src = "/images/recommendations/tiana.png";
    fotoTwo.alt = "Tiana";
    secondTitle.textContent ="Tiana Philips";
    secondJob.textContent = "Photographer";

    fotoThree.src = "/images/recommendations/taslan.png";
    fotoThree.alt = "Talan";
    thirdTitle.textContent = "Talan Westervelt";
    thirdJob.textContent = "Business man";
});

btnTwo.addEventListener("click", function() {
    fotoOne.src = "/images/recommendations/luqueta.jpg";
    fotoOne.alt = "Luqueta";
    firstTitle.textContent = "Lucas Henrique";
    firstJob.textContent = "CTO";

    fotoTwo.src = "/images/recommendations/gui.jpg";
    fotoTwo.alt = "Gui";
    secondTitle.textContent = "Guilherme Rodrigues";
    secondJob.textContent = "Tec Lead";

    fotoThree.src = "/images/recommendations/jorginho.jpg";
    fotoThree.alt = "Jorginho";
    thirdTitle.textContent = "Jorge de Souza";
    thirdJob.textContent = "Desenvolvedor Sênior";
});

btnThree.addEventListener("click", function() {
    fotoOne.src = "/images/recommendations/jessex.jpg";
    fotoOne.alt = "Jessex";
    firstTitle.textContent = "Jessé Tavares"; 
    firstJob.textContent = "Desenvolvedor Sênior";

    fotoTwo.src = "/images/recommendations/jao.jpg";
    fotoTwo.alt = "Jão";
    secondTitle.textContent = "Jão";
    secondJob.textContent = "Photographer";

    fotoThree.src = "/images/recommendations/james.png";
    fotoThree.alt = "James";
    thirdTitle.textContent = "Talan Westervelt";
    thirdJob.textContent = "Business man";
});
