$("button.bank-button:contains('Saving')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/withdraw.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Chequing')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/withdraw.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Back')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/withdrawAccount.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Home')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/mainMenu.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});


