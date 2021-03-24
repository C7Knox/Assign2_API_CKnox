var xhr = new XMLHttpRequest();
var url = "https://official-joke-api.appspot.com/jokes/ten";
var query;

$("#new").on("click", function() {
//    console.log("yes");
    
    location.reload();
})

xhr.open("GET", url, true);

xhr.send(null);


xhr.onload = function() {
    if(xhr.status == 200){
//        console.log(xhr);
//        document.write(xhr.responseText);

        var jokeData = JSON.parse(xhr.responseText);
        
        console.log(jokeData);
        
        //$("body").prepend(jokeData.setup + jokeData.punchline);
        jokeData.forEach(function(data){
            
//            $(".joke").prepend("<div>" + "<h2>" + data.setup + "</h2>" + "</div");
//            $(".line").prepend("<div>" + "<h3>" + data.punchline + "</h3>" + "</div");
            
            $(".joke").prepend("<div>" + "<h2>" + data.setup + "</h2><h3>" + data.punchline + "</h3><p>" + data.id + "</p>" + "</div");
        })
    }
}



//API Credit
//API courtesy of 15Dkatz on github. https://github.com/15Dkatz/official_joke_api
