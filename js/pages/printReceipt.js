$("button.bank-button:contains('Yes')").on('click', function(){

    $("body").fadeOut("slow", function(){

        $("html").prepend("<img style='margin-left:40%' src='images/print.gif'></img>");


        window.setTimeout(function(){
            $("img").remove();
            $("html").append("<div class='row'><div class='col-xs-4'></div>" +
            "<div id='receipt' style='font-size:200%;background-color:white;color:black;height:80%;'class='col-xs-4 text-center'></div></div>" + 
            "<div id='ok-row' class='text-center row'></div>"
            );
            var current = localStorage.getItem("currentBalance");
            var transaction = JSON.parse(localStorage.getItem("transactions"))[0];
            $("#receipt").append("Receipt <br>");
            $("#receipt").append("Date : " +  new Date() + "<br>");
            $("#receipt").append("Account Number : " +  "1234-****-****-3456" + "<br>");
            $("#receipt").append("Acccount Type : " + current + "<br>");
            $("#receipt").append("Action : " +  transaction["Description"] + "<br>");
            $("#receipt").append("Amount : " +  transaction["Amount"] + "<br>");
            $("#receipt").append("Balance : " +  transaction["Balance"] + "<br>");
            $("#ok-row").append("<button id='ok' class='bank-button'>OK</button>");
            $("#ok").on('click', function(){

        $("div").fadeOut("slow", function(){
            // redirect page to new one
            var page = "/mainMenu.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;

        });
        
        });
        }, 700);
        
       

    });

});

$("button.bank-button:contains('No')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/mainMenu.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});



