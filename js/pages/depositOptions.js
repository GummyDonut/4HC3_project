$("button.bank-button:contains('Cheque')").on('click', function(){
    localStorage.setItem("currentBalance", "savings");
    $("body").fadeOut("slow", function(){
    	localStorage.setItem("depositType", "Cheque");
        // redirect page to new one
        var page = "/depositAmount.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Cash')").on('click', function(){
    localStorage.setItem("currentBalance", "chequing");
    $("body").fadeOut("slow", function(){
    	localStorage.setItem("depositType", "Cash");
        // redirect page to new one
        var page = "/depositAmount.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Back')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/mainMenu.html";
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


