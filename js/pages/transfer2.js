// disable . & 00 button
$("button:contains('.')").prop("disabled", true);
$("button:contains('00')").prop("disabled", true);
var currentBalance = localStorage.getItem("currentBalance");
var oppositeBalance = (currentBalance == "chequing") ? "savings" : "chequing";
$("button.transfer-button").append(oppositeBalance);

// enable the enter button when there is sixteen letters
// also disable all numpad options
$("table.bank-numpad.bank-numbers button.bank-button").on('click', function(){
    // Get the value for the button
    var value = $(this).text();    
    var inputText = $("input.accountNumInput").val();
    var numbers = inputText.replace(/-/g,"");
    var dash = (numbers.length % 4 == 0 && inputText.length != 0) ? "-" : "";
    $("input.accountNumInput").val(inputText + dash + value);

    var numbers = $("input.accountNumInput").val().replace(/-/g, "");
    if (numbers.length == 16) {
        $("button.enter-button").prop("disabled", false);
        $("table.bank-numpad.bank-numbers button.bank-button").prop("disabled", true);
}

});

// disable the enter button when less than 16 numbers
// reenable buttons
$("button.correction-button").on("click", function(){
    var numbers = $("input.accountNumInput").val().replace(/-/g, "");
    if (numbers.length < 16) {
        $("button.enter-button").prop("disabled", true);
        $("table.bank-numpad.bank-numbers button.bank-button").prop("disabled", false);
        $("button:contains('.')").prop("disabled", true);
        $("button:contains('00')").prop("disabled", true);
    }
});

// disable button on clear
$("button.clear-button").on("click", function(){
    $("button.enter-button").prop("disabled", true)
    $("table.bank-numpad.bank-numbers button.bank-button").prop("disabled", false);
    $("button:contains('.')").prop("disabled", true);
    $("button:contains('00')").prop("disabled", true);
});

// enter button to validate and change page
$("button.enter-button").on("click", function(){
    localStorage.removeItem("transfer");
    var numberText = $("input.accountNumInput").val();
    if (numberText == "1234-5678-9012-3456") {
        $("h3.error-message").html("Can't transfer to self, click transfer to");
    }

    // link to next screen on pass
    else {
        $("body").fadeOut("slow", function(){

            // redirect page to new one
            var page = "/transfer3.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;
        });
    }
});

$("button.bank-button:contains('Transfer')").on('click', function(){

    localStorage.setItem("transfer", true);
    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/transfer3.html";
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



$("button.bank-button:contains('Back')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/transfer.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});




