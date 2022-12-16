
var x = document.getElementById("search")
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


/**
 * Visit https://codegena.com
 * Check https://codepen.io/tayfunerbilen/pen/rIHvD for autocomplete with youtube api
 */

var suggestCallBack; // global var for autocomplete jsonp

$(document).ready(function() {
  $("#search").autocomplete({
    source: function(request, response) {
      $.getJSON("https://suggestqueries.google.com/complete/search?callback=?", {
        "hl": "en", // Language
        "ds": "yt", // Restrict lookup to youtube
        "jsonp": "suggestCallBack", // jsonp callback function name
        "q": request.term, // query term
        "client": "youtube" // force youtube style response, i.e. jsonp
      });
      suggestCallBack = function(data) {
        var suggestions = [];
        $.each(data[1], function(key, val) {
          suggestions.push({
            "value": val[0]
          });
        });
        suggestions.length = 5; // prune suggestions list to only 5 items
        response(suggestions);
      };
    },
    select: function(event, ui) {
      console.log(ui.item.label);
    }
  });
});
