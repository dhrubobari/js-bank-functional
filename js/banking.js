// lets explore a function after all below codes
/* function doubleIt(num){
    const result = num * 2; // number jetake nibo seta 2x, ar jodi like alltime 5 * 2 korte chai tahole param er ar dorkar hotona, num er jaygay 5 dilei hoto.
    return result;
}
const first = doubleIt(5); // parameter e 5 pabe
const second = doubleIt(7); // etao parameter e jabe, Mane 5, 7, othoba jekono number diye korle x2 korbe. */

function doubleIt(num){
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId); // input id for id er value jekono somoy change hote pare
    const depositAmountText = inputField.value;
    const amountValue = parseFloat(depositAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
    // 2ta jagar poriborte 1ta jaygay code hoise, total 4 line er kaj hoise.
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
    }
// depositAmount & wannaAdd param, function e ei duitari hishab nibe
function updateBalance(depositAmount, wannaAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    // jodi add hoy, tahole true.
    if (wannaAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    // na hoile minus korbe
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input'); // input field ta anlam
    const depositAmountText = depositInput.value; // default hisabe string ase, numbers korte hobe.
    const depositAmount = parseFloat(depositAmountText); // input field er text take numbers kore fellam. */

    // get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText; // text ta dekhar jonno
    const previousDepositTotal = parseFloat(depositTotalText); // numbers e transform korlam
    depositTotal.innerText = previousDepositTotal + depositAmount; // je 2 variable k add kortesi, duitai kintu parseFloat kora. Tar mane numbers kora. setai add */
    // updateTotalField('deposit-total', depositAmount); // calling function, depositAmount 2nd param, call kora hoilo.

    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getInputValue('deposit-input');
    // > 0 dile minus digit like -100 nibena
    if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true); // add korar jonno true
    }
})
    // handle withdraw button
    document.getElementById('withdraw-button').addEventListener('click', function(){
        /* const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        // parseFloat so eta add hobe.
        const withdrawAmount = parseFloat(withdrawAmountText); */
        

        // get and update withdraw total
        /* const withdrawTotal = document.getElementById('withdraw-total');
        // innerText text show korbe
        const previousWithdrawTotalText = withdrawTotal.innerText;
        // parseFloat eta k korsi tai eta add hobe.
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); */

        // updateTotalField('withdraw-total', withdrawAmount); // withdraw-total 1st param, withdrawAmount k pass korbe.

        // eta korle amount er oikhane dekhacche,
        /* withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */ // 2 ta add korar moddhe ektai common, duitari text ber kora hoise. but ami kintu string er sathe string er add kortesi, korte hobe numbers er sathe numbers er. eijonno parseFloat. 25 number line.

        // update balance after withdraw. withdraw korle je balance kombe oitai update hobe.
        /* const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText; // eta ekta string ase
        const previousBalanceTotal = parseFloat(balanceTotalText); // setake ami numbers e transform korlm

        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

        const withdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        // plus eta korle ar NaN dekhabe na, < currentBalance withdraw limit define korche
        if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
            updateTotalField('withdraw-total', withdrawAmount);
            updateBalance(withdrawAmount, false);
        }
        // for error message
        if (withdrawAmount > currentBalance){
            console.log('you cant withdraw more than what you currently have in your account');
        }
        // updateBalance(withdrawAmount, false); // etar numbers ta negative hobe // minus korar jonno false

        /* clear field ar dawa lagbe na krn ekbar diyei felsi
        withdrawInput.value = ''; */
})