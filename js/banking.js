//--------- deposite button handle ----------//
document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInputField = document.getElementById("deposit-input");
    depositInputFieldText = depositInputField.value;
    depositInputFieldValue = parseFloat(depositInputFieldText);

    console.log(depositInputFieldText);

    const depositeShow = document.getElementById("deposit-show");
    const depositeShowTotal = depositeShow.innerText;
    const depositeShowTotalValue = parseFloat(depositeShowTotal);
    const totalDepositAmount = depositeShowTotalValue + depositInputFieldValue;

    depositeShow.innerText = totalDepositAmount;

    depositInputField.value = "";

})