document.getElementById("btn-withdral").addEventListener("click", function () {
  const withdralField = document.getElementById("widthral-amount");
  const withdraAmountString = withdralField.value;
  const withdra = parseFloat(withdraAmountString);
  const previousWithdraField = document.getElementById("withdraw");
  const previousWithdraString = previousWithdraField.innerText;
  const previousWithdra = parseFloat(previousWithdraString);
  const currentWithdraTotal = previousWithdra + withdra;
  previousWithdraField.innerText = currentWithdraTotal;
  withdralField.value = "";

  const totalBalanceSection = document.getElementById("total");
  const totalBalanceString = totalBalanceSection.innerText;
  const totalBalance = parseFloat(totalBalanceString);
  const remainninBalance = totalBalance - withdra;
  totalBalanceSection.innerText = remainninBalance;
});
