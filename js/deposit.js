document.getElementById('btn-deposit').addEventListener('click', function () {
    //get value
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //update valuue
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTolalString = depositTotalElement.innerText;
    const previousDepositTolal = parseFloat(previousDepositTolalString);

    const currentDepositTotal = previousDepositTolal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    //balance

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // new balance

    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;

    //set balance

    balanceTotalElement.innerText = currentBalanceTotal;

    //clear
    depositFiled.value = '';
})

