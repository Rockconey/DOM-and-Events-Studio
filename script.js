// Write your JavaScript code here.
let button = null;
let landingbutton = null;
let abort = null;
let up = null;
let pushRight = null;
let pushUp = null;
let loDown = null;
let pullLeft = null;
let rocketHeight = null;


window.addEventListener("load", function () {
    let goRocket = document.getElementById("rocket");
    goRocket.style.position = "absolute";
    goRocket.style.left = "0px";
    goRocket.style.bottom = "0px";
    let rocketHeight = document.getElementById("spaceShuttleHeight");
    button = document.getElementById("takeoff");
    landingbutton = document.getElementById("landing");
    abort = document.getElementById("missionAbort");
    pullLeft = document.getElementById("pullLeft");
    pushRight = document.getElementById("pushRight");
    pushUp = document.getElementById("pushUp");
    loDown = document.getElementById("loDown");
    
    
    
    
    
    button.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirm === true) {

        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";

        document.getElementById("shuttleBackground").style.backgroundColor = "blue";

        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) + 10000;
        } 
    })

    
    landingbutton.addEventListener("click", function(event) {

        window.alert("The shuttle is landing. Landing gear engaged.");

        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";

        document.getElementById("shuttleBackground").style.backgroundColor = "green";

        rocketHeight.innerHTML = 0;

        goRocket.style.left = "0px";
        goRocket.style.bottom = "0px";
    })

    
    abort.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");

        if (confirm === true) {

        document.getElementById("flightStatus").innerHTML = "Mission aborted.";

        document.getElementById("shuttleBackground").style.backgroundColor = "green";

        rocketHeight.innerHTML = 0;

        goRocket.style.left = "0px";
        goRocket.style.bottom = "0px";
        }
    })

    
    
    pullLeft.addEventListener("click", function(event) {

        movement = parseInt(goRocket.style.left) - 10 + 'px';
        goRocket.style.left = movement;
        
    })

    
    pushRight.addEventListener("click", function(event) {

        movement = parseInt(goRocket.style.left) + 10 + "px";
        goRocket.style.left = movement;
    })

    
    pushUp.addEventListener("click", function(event) {

        movement = parseInt(goRocket.style.bottom) + 10 + "px";
        goRocket.style.bottom = movement;

        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) + 10000;
    })

    
    loDown.addEventListener("click", function(event) {

        movement = goRocket.style.bottom - 10 + "px";
        goRocket.style.bottom = movement;

        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) - 10000;
        
        
    })

    





    

    

})

    



// Remember to pay attention to page loading!
