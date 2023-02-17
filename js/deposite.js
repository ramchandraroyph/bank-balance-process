// deposit button evenListerner
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-amount");
  const newDepositString = depositField.value;
  const newDeposit = parseFloat(newDepositString);
  const depositAmount = document.getElementById("deposit");
  const previousDepositString = depositAmount.innerText;
  const previousDeposit = parseFloat(previousDepositString);
  const currentDepositeTotal = previousDeposit + newDeposit;
  depositAmount.innerText = currentDepositeTotal;
  const totalField = document.getElementById("total");
  const previousTotalBalanceString = totalField.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  const newTotalBalance = previousTotalBalance + newDeposit;
  totalField.innerText = newTotalBalance;
  depositField.value = "";
});
