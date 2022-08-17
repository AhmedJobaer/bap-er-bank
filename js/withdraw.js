document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    newWithdrawAmount = parseFloat(newWithdrawAmountString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const currenWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;


    withdrawTotalElement.innerText = currenWithdrawTotal;


    const balaceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balaceTotalElement.innerText = newBalanceTotal


    withdrawField.value = '';
})