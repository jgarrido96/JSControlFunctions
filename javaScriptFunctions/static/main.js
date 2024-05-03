
let bankAccount = 0

function bankDeposit() {
    let deposit = prompt("How much would you like to deposit?")
    bankAccount += parseFloat(deposit)
    console.log(`Current balance: $${bankAccount}`)

}


function bankWithdrawal() {
    let withdrawal = parseFloat(prompt("How much would you like to withdraw?"))
    if (withdrawal > bankAccount) {
        console.log("Not enough funds in the account!")
    }else {
        bankAccount -= withdrawal
        console.log(`Current Balance $${bankAccount}`)
    }
}

function checkAccount() {
    console.log(`Current Balance: $${bankAccount}`)
}


function bankingStuff() {
    while (true) {
        let choice = prompt(`What would you like to do? 1: Deposit Money  2: Withdraw Money  3: Check Balance  0: to quit`)
        if (choice == "1"){
            bankDeposit()
        }
        else if (choice == "2"){
            bankWithdrawal()
        }
        else if (choice == "3"){
            checkAccount()
        }
        else if (choice == "0"){
            break
        }
        else {
            console.log("Please enter a valid input! 1, 2, or 3")
        }
    }
}
bankingStuff()