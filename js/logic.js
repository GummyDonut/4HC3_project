if(!localStorage.getItem("currentBalance")) {
    localStorage.setItem("currentBalance", "chequing");
}
if(!localStorage.getItem("balances")) {
    var balances = {
        "chequing" : 1000,
        "savings" : 500
    }

    localStorage.setItem("balances", JSON.stringify(balances));
}
if(!localStorage.getItem("transactions"))  {
    var transactions = JSON.stringify([
        {
            "Date": new Date(),
            "Description" : "Made Account",
            "Amount" : 1000,
            "Balance": 1000,
        }
    ]);
    localStorage.setItem("transactions", transactions);
}

function test() {
    console.log("This is a test");
}

// function for withdrawing cash
function withdraw(amount) {
    var transactions = localStorage.getItem("transactions");
    var transactionsArray = JSON.parse(transactions); 
    var currentBalance = localStorage.getItem("currentBalance");
    
    var balances = JSON.parse(localStorage.getItem("balances"));
    var newBalance = parseInt(balances[currentBalance]) - amount;
    
    balances[currentBalance] = newBalance;

    var action = {
         
         "Date" : new Date(),
         "Description" : "Withdrawal",
         "Amount" : -1 * amount,
         "Balance" : newBalance 
    }
    transactionsArray.push(action);
    localStorage.setItem("transactions", JSON.stringify(transactionsArray));
    localStorage.setItem("balances", JSON.stringify(balances));
}


