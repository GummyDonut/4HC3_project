// disable . & 00 button
$("button:contains('.')").prop("disabled", true);
$("button:contains('00')").prop("disabled", true);

// enable the enter button when there is four letters
// also disable all numpad options
$("table.bank-numpad.bank-numbers button.bank-button").on('click', function(){
    // Get the value for the button
    var value = $(this).text();    
    var inputText = $("input.accountNumInput").val();
    $("input.accountNumInput").val(inputText + value);

    var numbers = $("input.accountNumInput").val();
    if (numbers.length == 4) {
        $("button.enter-button").prop("disabled", false);
        $("table.bank-numpad.bank-numbers button.bank-button").prop("disabled", true);
    }
});
        
// disable the enter button when less than 16 numbers
// reenable buttons
$("button.correction-button").on("click", function(){
    var numbers = $("input.accountNumInput").val();
    if (numbers.length < 4) {
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
    var numberText = $("input.accountNumInput").val();
    if (numberText != "1234") {
        $("h3.error-message").html("Invalid password");
    }

    // link to next screen on pass
    else {
        $("body").fadeOut("slow", function(){

            // redirect page to new one
            var page = "/mainMenu.html";
            var url = location.href;
            var base = url.substring(0, url.lastIndexOf("/"));
            window.location = base + page;
        });
    }
});
