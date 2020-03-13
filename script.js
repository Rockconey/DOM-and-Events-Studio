// Write your JavaScript code here.
let button = null;
let landingbutton = null;
let abort = null;
let up = null;
let pushRight = null;
let pushUp = null;
let soDown = null;
let pullLeft = null;
let rocketHeight = null;


window.addEventListener("load", function () {
    let goRocket = document.getElementById("rocket");
    let rocketHeight = document.getElementById("spaceShuttleHeight");
    
    goRocket.style.position = "absolute";
    goRocket.style.left = "0px";
    goRocket.style.bottom = "0px";
    
    button = document.getElementById("takeoff");
    button.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirm === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) + 10000;
        } 
    })

    landingbutton = document.getElementById("landing");
    landingbutton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        rocketHeight.innerHTML = 0;
    })

    abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        rocketHeight.innerHTML = 0;
        }
    })

    
    
    pullLeft = document.getElementById("pullLeft");
    pullLeft.addEventListener("click", function(event) {
        document.getElementById("rocket").style.left = "-10px";
        
    })

    pushRight = document.getElementById("pushRight");
    pushRight.addEventListener("click", function(event) {
        document.getElementById("rocket").style.left = "10px";
    })

    pushUp = document.getElementById("pushUp");
    pushUp.addEventListener("click", function(event) {
        goRocket.style.bottom = "10px";
        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) + 10000;
    })

    loDown = document.getElementById("loDown");
    loDown.addEventListener("click", function(event) {
        goRocket.style.bottom = "-10px";
        rocketHeight.innerHTML = parseInt(rocketHeight.innerHTML) - 10000;
        
        
    })

    





    

    

})

    



// Remember to pay attention to page loading!
