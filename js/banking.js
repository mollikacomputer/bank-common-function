

function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const amountValue = parseFloat(inputText);
  // console.log(depositAmount);
  inputField.value = '';
  return amountValue;
}

document.getElementById('deposit-button').addEventListener('click', function(){
/* 
  // deposit input field
  const depositInput = document.getElementById('deposit-input');
  const depositInputText = depositInput.value;
  const depositInputAmount = parseFloat(depositInputText);
  // console.log(depositAmount);
 */
  const depositInputAmount = getInputValue('deposit-input');
  // deposit amount 
  
  const depositAmountField = document.getElementById('before-deposit-total');
  const depositAmountText = depositAmountField.innerText;
  const depositAmount = parseFloat(depositAmountText);

  // deposit Total Amount After Update
  const depositTotalAmount = depositAmount + depositInputAmount;
  depositAmountField.innerText = depositTotalAmount;

  // deposit update account balance
  const balanceField = document.getElementById('balance-field');
  const balanceFieldText = balanceField.innerText;
  const balanceFieldAmount = parseFloat(balanceFieldText);
 
  const balanceUpdateField = balanceFieldAmount + depositInputAmount;
  balanceField.innerText = balanceUpdateField;

  // withdraw amount update and total
  
  

  // console.log(depositAmount);
  // depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
  // withdraw input field
  const withdrawInputAmount = getInputValue('withdraw-input');
  /* 
  const withdrawInputField = document.getElementById('withdraw-input');
  const withdrawInputFieldText = withdrawInputField.value;
  const withdrawInputAmount = parseFloat(withdrawInputFieldText);
 */
  // withdraw field
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawFieldText = withdrawField.innerText;
  const withdrawFieldAmount = parseFloat(withdrawFieldText);
  // withdraw field update
  const withdrawFieldUpdate = withdrawFieldAmount + withdrawInputAmount;

  withdrawField.innerText = withdrawFieldUpdate;
  // withdrawInputField.value = '';

  
  // deposit update account balance
  const balanceField = document.getElementById('balance-field');
  const balanceFieldText = balanceField.innerText;
  const balanceFieldAmount = parseFloat(balanceFieldText);

  const updateBalanceAfterWithdraw = balanceFieldAmount - withdrawInputAmount;
  balanceField.innerText = updateBalanceAfterWithdraw;

})
/*

 */
// ==============================
/*
// step 1. handle deposit button event
      
document.getElementById('deposit-button').addEventListener('click', function(){
    // step 2: catch input value + new deposit amount into input field
    const depositInputBox = document.getElementById('deposit-input');
    let newDepositAmount = depositInputBox.value;
    // step 3: catch deposit before total amount of money 
    let beforeDepositTotal = document.getElementById('before-deposit-total');
    let beforeDepositTotalText= beforeDepositTotal.innerText;
    let beforeDepositTotalAmount = parseFloat(beforeDepositTotalText);
    //step 4: existing total + current total 
    let updateTotalBalanceAmount = parseFloat(newDepositAmount) + parseFloat(beforeDepositTotalText);
    // step 5: replace of before deposit total money
     beforeDepositTotal.innerText = updateTotalBalanceAmount;
     // step 6: Total balance update
    const previousBalanceText =  document.getElementById('previous-balance-text');
    const previousBalanceAmount = parseFloat(previousBalanceText.innerText);
    
    const updateBalanceTotal = parseFloat(newDepositAmount) + previousBalanceAmount;

    previousBalanceText.innerText = updateBalanceTotal;
    // step 7: withdraw
    
    depositInputBox.value = ' ';
    //  console.log(updateAccountBalance);
})
/* 
function getInputValue(inputId){
  const withdrawInput = document.getElementById('inputId');
  const withdrawText = withdrawInput.value;
  const withdrawInputAmount = parseFloat(withdrawText);
  withdrawInput.value = '';
  return withdrawInputAmount;

}
 */
/*
  // step 1: withdraw button event
  document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    // step 2: catching withdraw input field
 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawText);

    // console.log(withdrawAmount);
    // step 3: catching withdraw amount text field
    const withdrawTextField = document.getElementById('withdraw-text');
    const withdrawTextValue = withdrawTextField.innerText;
    const withdrawAmount = parseFloat(withdrawTextValue);
    // step 4: total withdraw amount
    const withdrawTotal = withdrawInputAmount + withdrawAmount;
    // console.log(withdrawTotal);
    withdrawTextField.innerText = withdrawTotal;
    // my questions why not working???
    // withdrawTextValue = withdrawTotal;  

    // step 5: total Account balance after total withdraw
    const previousAccountField = document.getElementById('previous-balance-text');
    const previousAccountText = previousAccountField.innerText;
    const previousAccountBalance = parseFloat(previousAccountText);
    // console.log(previousAccountBalance);
    // step 6: previous total balance
        const previousTotalBalanceText = document.getElementById('previous-balance-text');
        const previousTotalBalance = previousTotalBalanceText.innerText;
        const previousTotalAccountBalance = parseFloat(previousTotalBalance);
        // step 7: total account balance amount after withdraw amount
        const currentBalanceAfterWithdraw = previousTotalAccountBalance - withdrawInputAmount;
        // looks good
        // console.log(currentBalanceAfterWithdraw);
        previousAccountField.innerText = currentBalanceAfterWithdraw;
        // this code not working
        withdrawInput.value = '';
})


*/