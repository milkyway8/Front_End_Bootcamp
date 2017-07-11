var balance1 = 1000;
var balance2 = 0;

function printBalance(balance) {
//print Balance
console.log(balance);
}

function transferBalance(balanceFrom, balanceTo){
//Transfer Balance
    if(balanceFrom > 0){
        balanceTo = balanceTo + balanceFrom;
        console.log("Sucessfully transfer: " + balanceTo);
    }else{
        console.log("The current balance has no founds");
    }
}

function withdrawBalance(balance,amount){
//Withdraw amount
if (amount > balance){
    console.log("Current amount cant be withdraw");
}else{
    console.log("Amount withdrawed");
    balance = balance - amount;
    console.log("Balance amount: " + balance);
}
} 


function withdrawAllBalance(balance){
//Withdraw ballance in amounts of 100
if (balance >= 100){
    while(balance>0){
        balance = balance - 100;
        console.log(balance);
    }
    
}else{
    console.log("Cant withdraw any amount from balance");
}

}
