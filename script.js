    const inputMin = document.getElementById("startingNumber");
    const inputMax = document.getElementById("endingNumber");
    const main = document.getElementById("myIdContainer");
    const buttonA = document.getElementById("buttonA");
    const buttonB = document.getElementById("buttonB");

// starting value on page refresh.
    inputMin.value = 1;
    inputMax.value = 100;

const create = function () {            //Creating function that will generate 100 divs.
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    //this line creates 100 divs and hides all that do not match input values.

    for (let i = 1; i <= 100; i++) {     
    // for( i = inputMin.value; i <= inputMax.value; i++ ) { // <--- 'UNcomment' this line to create divs according to input values.
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);    // giving "id" name to every div

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizzbuzz");   // this adds class to divs

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buzz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "forTheRest");
            }
        }
    }
};    

create();
 
//This adds event to first INPUT - sets min value.

    inputMin.onkeyup = function (e) {
        this.value = inputMin.value.replace(/^(0*)/, "");
        if (inputMin.value >= 1 && inputMin.value <= 100) {
            this.value = inputMin.value;
        } else if (inputMin.value.length === 0) {
            inputMin.value = null;
        } else {
            inputMin.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
    
//This adds event to second INPUT - sets max value.

    inputMax.onkeyup = function (e) {
        this.value = inputMax.value.replace(/^(0*)/, "");
        if (inputMax.value >= 1 && inputMax.value <= 100) {
            this.value = inputMax.value;
        } else if (inputMax.value.length === 0) {
            inputMax.value = null;
            
        } else {
            inputMax.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };

// Buttons RESET and REFRESH

    buttonA.onclick = function() {
        inputMin.value = "";
        inputMax.value = "";
        create();
    };
    
    buttonB.onclick = function() {
        inputMin.value = 1;
        inputMax.value = 100;
        create();
    };



// JQuery scripts for selecting divs according to class:

    $(document).ready(function(){ $("#buttonC").click(function(){ 
        $(".forTheRest, .buzz, .fizzbuzz").toggle();
      });
    });

    $(document).ready(function(){ $("#buttonD").click(function(){ 
        $(".forTheRest, .fizz, .fizzbuzz").toggle();
      });
    });

    $(document).ready(function(){ $("#buttonE").click(function(){ 
        $(".forTheRest, .buzz, .fizz").toggle();
      });
    });

// nightDayHandler
var Links = {
    setColor:function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

var Body = {
    setColor:function(color) {
        document.querySelector('body').style.color = color;
    }, 

    setBackgroundColor:function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
    
}

function nightDayHandler(self) {
    var target = document.querySelector('body');

    if(self.value === 'night' ) {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}