
var colorSillas1 = document.querySelectorAll(".asientosE");
/*var colorSillas2 = document.querySelector(".asientos2");
var colorSillas3 = document.querySelector(".asientos3");
var colorSillas4 = document.querySelector(".asientos4");
var colorSillas5 = document.querySelector(".asientos5");
var colorSillas6 = document.querySelector(".asientos6");
var colorSillas7 = document.querySelector(".asientos7");
var colorSillas8 = document.querySelector(".asientos8");
var colorSillas9 = document.querySelector(".asientos9");
var colorSillas10 = document.querySelector(".asientos10");
var colorSillas11 = document.querySelector(".asientos11");
var colorSillas12 = document.querySelector(".asientos12");
var colorSillas13 = document.querySelector(".asientos13");
var colorSillas14 = document.querySelector(".asientos14");
var colorSillas15 = document.querySelector(".asientos15");
var colorSillas16 = document.querySelector(".asientos16");
var colorSillas17 = document.querySelector(".asientos17");
var colorSillas18 = document.querySelector(".asientos18");
var colorSillas19 = document.querySelector(".asientos19");
var colorSillas20 = document.querySelector(".asientos20");*/
var letterPuesto;
var numPuesto;
var contarSillas = 0;
//var escogidaA1 = true;

for (let index = 0; index < colorSillas1.length; index++) {
    colorSillas1[index].addEventListener("click", function () {
        colorSillas1[index].style.background = "#000000";
        if(index<5){
            letterPuesto = "A";
            numPuesto = index + 1;
        }

        if(index>=5 && index<10){
            letterPuesto = "B";
            numPuesto = index - 4;
        }

        if(index>=10 && index<15){
            letterPuesto = "C";
            numPuesto = index - 9;
        }

        if(index>=15 && index<20){
            letterPuesto = "D";
            numPuesto = index - 14;
        }

        contarSillas += 1;
        console.log(letterPuesto + numPuesto + " " + contarSillas)

    })
}
//var sillaLocal=localStorage.getItem("letterPuesto");

/*this.colorSillas1.addEventListener("click", function () {
    colorSillas1.style.background = "#000000";
    letterPuesto = "A";
    numPuesto = 1;
    console.log(letterPuesto + numPuesto)


    //if(escogidaA1){
        contarSillas++;
        //escogidaA1 = false;

    //}
    console.log(contarSillas)

});

/*this.colorSillas2.addEventListener("click", function () {
    colorSillas2.style.background = "#000000";
    letterPuesto = "A";
    numPuesto = 2;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas3.addEventListener("click", function () {
    colorSillas3.style.background = "#000000";
    letterPuesto = "A";
    numPuesto = 3;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas4.addEventListener("click", function () {
    colorSillas4.style.background = "#000000";
    letterPuesto = "A";
    numPuesto = 4;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas5.addEventListener("click", function () {
    colorSillas5.style.background = "#000000";
    letterPuesto = "A";
    numPuesto = 5;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas6.addEventListener("click", function () {
    colorSillas6.style.background = "#000000";
    letterPuesto = "B";
    numPuesto = 1;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas7.addEventListener("click", function () {
    colorSillas7.style.background = "#000000";
    letterPuesto = "B";
    numPuesto = 2;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas8.addEventListener("click", function () {
    colorSillas8.style.background = "#000000";
    letterPuesto = "B";
    numPuesto = 3;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas9.addEventListener("click", function () {
    colorSillas9.style.background = "#000000";
    letterPuesto = "B";
    numPuesto = 4;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas10.addEventListener("click", function () {
    colorSillas10.style.background = "#000000";
    letterPuesto = "B";
    numPuesto = 5;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas11.addEventListener("click", function () {
    colorSillas11.style.background = "#000000";
    letterPuesto = "C";
    numPuesto = 1;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas12.addEventListener("click", function () {
    colorSillas12.style.background = "#000000";
    letterPuesto = "C";
    numPuesto = 2;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas13.addEventListener("click", function () {
    colorSillas13.style.background = "#000000";
    letterPuesto = "C";
    numPuesto = 3;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas14.addEventListener("click", function () {
    colorSillas14.style.background = "#000000";
    letterPuesto = "C";
    numPuesto = 4;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas15.addEventListener("click", function () {
    colorSillas15.style.background = "#000000";
    letterPuesto = "C";
    numPuesto = 5;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas16.addEventListener("click", function () {
    colorSillas16.style.background = "#000000";
    letterPuesto = "D";
    numPuesto = 1;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas17.addEventListener("click", function () {
    colorSillas17.style.background = "#000000";
    letterPuesto = "D";
    numPuesto = 2;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas18.addEventListener("click", function () {
    colorSillas18.style.background = "#000000";
    letterPuesto = "D";
    numPuesto = 3;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas19.addEventListener("click", function () {
    colorSillas19.style.background = "#000000";
    letterPuesto = "D";
    numPuesto = 4;
    console.log(letterPuesto + numPuesto)
});

this.colorSillas20.addEventListener("click", function () {
    colorSillas20.style.background = "#000000";
    letterPuesto = "D";
    numPuesto = 5;
    console.log(letterPuesto + numPuesto)
});*/
