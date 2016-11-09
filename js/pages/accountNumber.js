// disable enter & cancel button on start
$("button.cancel-button, button.enter-button").prop("disabled", true);

// disable . & 00 button
$("button:contains('.')").prop("disabled", true);
$("button:contains('00')").prop("disabled", true);

// enable the enter button when there is sixteen letters
// also disable all numpad options
$("table.bank-numpad.bank-numbers button.bank-button").on('click', function(){
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
    $("button.enter-button").prop("disabled", true);
    $("table.bank-numpad.bank-numbers button.bank-button").prop("disabled", false);
    $("button:contains('.')").prop("disabled", true);
    $("button:contains('00')").prop("disabled", true);

});

// enter button to validate and change page
$("button.enter-button").on("click", function(){
    var numberText = $("input.accountNumInput").val();
    if (numberText != "1234-5678-9101-1234") {
        $("h3.error-message").html("Invalid account number");
    }
});
