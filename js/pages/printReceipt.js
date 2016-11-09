$("button.bank-button:contains('Yes')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/mainMenu.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

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



