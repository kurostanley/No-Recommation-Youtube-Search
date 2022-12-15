
var x = document.getElementById("searchbox")
let button = document.getElementById("button")

x.addEventListener("keydown", function(e){
    if(e.code === "Enter"){
        visitPage();
    }
})

button.addEventListener("click", function(e){
        visitPage();
})

function visitPage(){
    window.location.href=`https://www.youtube.com/results?search_query=${x.value}`;
}
