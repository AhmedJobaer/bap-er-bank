document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFiled = document.getElementById('deposit-field');
    const depositAmount = depositFiled.value;
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTolal = depositTotalElement.innerText = depositAmount;
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawFiled.value;
    const withdrawTotalElement = document.getElementById('withdraw-total');
    console.log(withdrawAmount);
    const withdrawTolal = withdrawTotalElement.innerText = withdrawAmount;
})