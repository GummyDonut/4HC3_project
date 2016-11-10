// disable . & 00 button
if(!localStorage.getItem("group_6_zayan_is_awesome")) {
    
    localStorage.clear();
    localStorage.setItem("group_6_zayan_is_awesome", "1");
}

$("button:contains('.')").prop("disabled", true);
$("button:contains('00')").prop("disabled", true);

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

$("#card-button").on("click", function(){
    $("body").fadeOut("slow", function(){
        $("html").prepend("<img style='margin-left:40%' src='images/swipe.gif'></img>");
        window.setTimeout(function(){
            // redirect page to new one
            var page = "/pin.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;
        }, 1200);
    });
});

// enter button to validate and change page
$("button.enter-button").on("click", function(){
    var numberText = $("input.accountNumInput").val();
    if (numberText != "1234-5678-9012-3456") {
        $("h3.error-message").html("Invalid account number");
    }

    // link to next screen on pass
    else {
        $("body").fadeOut("slow", function(){

            // redirect page to new one
            var page = "/pin.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;
        });
    }
});
