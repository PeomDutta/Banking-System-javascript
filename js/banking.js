//--------- deposite button handle ----------//
document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInputField = document.getElementById("deposit-input");
    const depositInputFieldText = depositInputField.value;
    const depositInputFieldValue = parseFloat(depositInputFieldText);

    console.log(depositInputFieldText);

    const depositeShow = document.getElementById("deposit-show");
    const depositeShowTotal = depositeShow.innerText;
    const depositeShowTotalValue = parseFloat(depositeShowTotal);
    const totalDepositAmount = depositeShowTotalValue + depositInputFieldValue;

    depositeShow.innerText = totalDepositAmount;


    // balance after deposit handle 
    const balanceShow = document.getElementById("balance-show");
    const balanceShowTotal = balanceShow.innerText;
    const balanceShowTotalValue = parseFloat(balanceShowTotal);


    const totalBalanceAmount = balanceShowTotalValue + depositInputFieldValue;


    balanceShow.innerText = totalBalanceAmount;

    // clear deposit money
    depositInputField.value = "";

})




//------------------ withdraw button handle ---------------------//
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawInputFieldText = withdrawInputField.value;
    const withdrawInputFieldValue = parseFloat(withdrawInputFieldText);

    console.log(withdrawInputFieldValue);

    const withdrawShow = document.getElementById("withdraw-show");
    const withdrawShowTotal = withdrawShow.innerText;
    const withdrawShowTotalValue = parseFloat(withdrawShowTotal);
    const totalWithdrawAmount = withdrawShowTotalValue + withdrawInputFieldValue;

    withdrawShow.innerText = totalWithdrawAmount;


    // balance after withdraw handle 

    const balanceShow = document.getElementById("balance-show");
    const balanceShowTotal = balanceShow.innerText;
    const balanceShowTotalValue = parseFloat(balanceShowTotal);


    const totalBalanceAmount = balanceShowTotalValue - withdrawInputFieldValue;


    balanceShow.innerText = totalBalanceAmount;

    // clear withdraw money
    withdrawInputField.value = "";

})