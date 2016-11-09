$("button.bank-button:contains('Withdraw')").on('click', function(){

    $("body").fadeOut("slow", function(){
         
        // redirect page to new one
        var page = "/pin.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Deposit')").on('click', function(){

    $("body").fadeOut("slow", function(){
         
        // redirect page to new one
        var page = "/pin.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Transfer')").on('click', function(){

    $("body").fadeOut("slow", function(){
         
        // redirect page to new one
        var page = "/pin.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Balance')").on('click', function(){

    $("body").fadeOut("slow", function(){
         
        // redirect page to new one
        var page = "/balance.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});
