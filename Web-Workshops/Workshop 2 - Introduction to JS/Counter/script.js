var counter = document.querySelector('.counter');
var count = 0;
counter.textContent = count;
counter.style.color = "blue";

function giveColor(){
    // Changing the color of the texts appropriately
    if(count == 0 ) 
        counter.style.color = "blue";
    else if( count < 0 )
        counter.style.color = "red";
    else
        counter.style.color = "green";
}

function minus(){
    count--; // Decrementing count
    counter.textContent = count;
    giveColor();
}
function plus(){
    count++; // Incrementing count
    counter.textContent = count;
    giveColor();
}