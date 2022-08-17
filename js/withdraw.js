document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    newWithdrawAmount = parseFloat(newWithdrawAmountString);


    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number!')
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    const balaceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Fuck you!!!!!!');
        return;
    }

    const currenWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currenWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balaceTotalElement.innerText = newBalanceTotal



})