
$("button.bank-button.ten").on('click', function(){
    withdraw(10);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/printReceipt.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('20')").on('click', function(){
    withdraw(20);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/printReceipt.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('30')").on('click', function(){

    withdraw(30);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/printReceipt.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('50')").on('click', function(){
    withdraw(50);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/printReceipt.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('100')").on('click', function(){
    withdraw(100);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/printReceipt.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('other')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/other.html";
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

