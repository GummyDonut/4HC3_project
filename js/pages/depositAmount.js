
$("button.enter-button").prop("disabled", true);

// enable the enter button when there is four letters
// also disable all numpad options
$("table.bank-numpad.bank-numbers button.bank-button").on('click', function(){
    // Get the value for the button
    var value = $(this).text();    
    var inputText = $("input.accountNumInput").val();
    $("input.accountNumInput").val(inputText + value);
    $("button.enter-button").prop("disabled", false);
});


$("button.correction-button").on("click", function(){
    if($("input.accountNumInput").val().length == 0)
        $("button.enter-button").prop("disabled", true);
});


$("button.clear-button").on("click", function(){
    $("button.enter-button").prop("disabled", true);
});

$("button.bank-button:contains('Enter')").on('click', function(){
    var amount = $("input.accountNumInput").val();
    deposit(amount);

    $("body").fadeOut("slow", function(){
        var deposit = (localStorage.getItem("deposit") == "cash") ? "evelope" : "cheque";
        $("html").prepend("<img style='margin-left:40%' src='images/" + deposit + ".gif'></img>");
        window.setTimeout(function(){
            // redirect page to new one
            var page = "/printReceipt.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;
        }, 3000);
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


