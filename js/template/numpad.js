

// add event-listener for button so that it insets into textfield
$("table.bank-numpad.bank-numbers button.bank-button").on('click', function(){

    // Get the value for the button
    var value = $(this).text();    
    var inputText = $("input.accountNumInput").val();
    var numbers = inputText.replace(/-/g,"");
    var dash = (numbers.length % 4 == 0 && inputText.length != 0) ? "-" : "";
    $("input.accountNumInput").val(inputText + dash + value);
});

// correction button functionality
$("button.correction-button").on("click", function(){
    $("h3.error-message").html("");
    var currentText = $("input.accountNumInput").val();
    var numbers = currentText.replace(/-/g,"")
    var subtract = (numbers.length % 4 == 1 && numbers.length != 1) ? 2 : 1;
    var newText = currentText.substring(0, currentText.length - subtract);
    $("input.accountNumInput").val(newText)
});

// correction button functionality
$("button.clear-button").on("click", function(){
    $("h3.error-message").html("");
    $("input.accountNumInput").val("");
});

// disable typing in the input field
$("input.accountNumInput").prop("disabled", true);

// disable enter & button on start
$("button.enter-button").prop("disabled", true);


