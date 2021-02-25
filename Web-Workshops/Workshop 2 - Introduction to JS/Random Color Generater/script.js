const hexArray = [ 0 ,1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 , 9 ,'A' , 'B' , 'C' , 'D' , 'E' , 'F' ];

function changeColor(){
    var hexColor = "#";
    // generating the Hexadecimal Value
    for(var i =0 ; i < 6; i++ ){
        var index = Math.floor(Math.random()*(hexArray.length)) 
        // Adding the Randomly chosen element from hexArray to the 
        // hexColor string
        hexColor = hexColor + hexArray[index];
    }
    // console.log(hexColor);
    var body = document.querySelector('body'); // selecting body and storing in a variable
    
    body.style.backgroundColor = hexColor; // Changing Bg of the body
    var changeName = document.querySelector(".changeName");

    // Changing the content in the HTML element with class="changeName"
    changeName.textContent = hexColor; 
}