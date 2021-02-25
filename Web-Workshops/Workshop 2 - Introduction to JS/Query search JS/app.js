var array = ["apple","orange","banana","papaya","watermelon","dragonfly","mango","kiwi","blueberry","cranberry"];

var ul = document.querySelector("#list");

// Adding array items in the list through DOM
for(var i = 0; i < array.length; i++){
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = array[i];
    ul.appendChild(li);
}

// Capture input field and add the event listener
input = document.querySelector("#input-box");
input.addEventListener("input", event => { // Search for "input", "keyup", "change" event listeners
    var filter = input.value.toUpperCase();
    var li = document.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) == -1) {  // indexOf(): https://www.w3schools.com/jsref/jsref_indexof.asp
            li[i].style.display = "none";
        } else {
            li[i].style.display = "block";
        }
    }
})
