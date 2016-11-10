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
            "Description" : "Made Chequing Account",
            "Amount" : 1000,
            "Balance": 1000,
            "type" : "chequing"
        },
        {
            "Date": new Date(),
            "Description" : "Made Savings Account",
            "Amount" : 500,
            "Balance": 500,
            "type" : "savings"
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
    var newBalance = parseFloat(balances[currentBalance]) - amount;
    
    balances[currentBalance] = newBalance;

    var action = {
         
         "Date" : new Date(),
         "Description" : "Withdrawal",
         "Amount" : -1 * amount,
         "type" : currentBalance,
         "Balance" : newBalance 
    }
    transactionsArray.push(action);
    localStorage.setItem("transactions", JSON.stringify(transactionsArray));
    localStorage.setItem("balances", JSON.stringify(balances));
}

// function for withdrawing cash
function deposit(amount) {
    var transactions = localStorage.getItem("transactions");
    var transactionsArray = JSON.parse(transactions); 
    var currentBalance = localStorage.getItem("currentBalance");
    
    var balances = JSON.parse(localStorage.getItem("balances"));
    var newBalance = parseFloat(balances[currentBalance]) + parseFloat(amount);
    
    balances[currentBalance] = newBalance;

    var action = {
         
         "Date" : new Date(),
         "Description" : "Withdrawal",
         "Amount" : amount,
         "type" : currentBalance,
         "Balance" : newBalance 
    }
    transactionsArray.push(action);
    localStorage.setItem("transactions", JSON.stringify(transactionsArray));
    localStorage.setItem("balances", JSON.stringify(balances));
}

// function for withdrawing cash
function transfer(amount) {
    var transactions = localStorage.getItem("transactions");
    var transactionsArray = JSON.parse(transactions); 
    var currentBalance = localStorage.getItem("currentBalance");
    var oppositeBalance = (currentBalance == "chequing") ? "savings" : "chequing";  
    var balances = JSON.parse(localStorage.getItem("balances"));
    var newBalance = parseFloat(balances[currentBalance]) - amount;
    
    balances[currentBalance] = newBalance;
    if(localStorage.getItem("transfer")) {
        balances[oppositeBalance] = parseFloat(balances[oppositeBalance]) + amount;
        var action = {
         
         "Date" : new Date(),
         "Description" : "Transferred money to" + oppositeBalance ,
         "Amount" : amount,
         "Balance" : balances[currentBalance], 
         "type" : oppositeBalance
        } 
        transactionsArray.push(action);
    }
        
    var action = {
         
         "Date" : new Date(),
         "Description" : "Transferred money away from " + currentBalance ,
         "Amount" : -1 * amount,
         "Balance" : newBalance, 
         "type" : currentBalance
    }
    transactionsArray.push(action);
    localStorage.setItem("transactions", JSON.stringify(transactionsArray));
    localStorage.setItem("balances", JSON.stringify(balances));
}
