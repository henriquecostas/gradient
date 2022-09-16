
var mousedownID = -1;  //Global ID of mouse down interval
let randomize = document.querySelector('section a');

function mousedown(event) {
    if (mousedownID == -1) { //Prevent multimple loops!
        mousedownID = setInterval(whilemousedown, 750 /*execute every 750ms*/);
    }
}

function mouseup(event) {
    if(mousedownID != -1) {  //Only stop if exists
        clearInterval(mousedownID);
        mousedownID = -1;
    }

}

function whilemousedown() {
    for (let i = 1; i <= 3; i++){
        const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16); 
        let radial = document.querySelector('.radial' + i);
        radial.setAttribute ('style', 'background-color:' + randomColor);
    }
}

//Assign events
randomize.addEventListener("mousedown", mousedown);
randomize.addEventListener("mouseup", mouseup);
randomize.addEventListener("click", whilemousedown);
//Also clear the interval when user leaves the window with mouse
randomize.addEventListener("mouseout", mouseup);