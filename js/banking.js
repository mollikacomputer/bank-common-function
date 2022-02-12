
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const amountValue = parseFloat(inputText);
  // console.log(depositAmount);
  inputField.value = '';
  return amountValue;
}
function updateTotalField(totalFieldId, inputAmount){
  const field = document.getElementById(totalFieldId);
  const text = field.innerText;
  const amount = parseFloat(text);
  // deposit Total Amount After Update
  field.innerText = amount + inputAmount;
}
function updateBalance(inputAmount, isAdd){
  const balanceField = document.getElementById('balance-field');
  const balanceFieldText = balanceField.innerText;
  const balanceFieldAmount = parseFloat(balanceFieldText);
  if(isAdd == true){
    balanceField.innerText = balanceFieldAmount + inputAmount;
  }else{
    balanceField.innerText = balanceFieldAmount - inputAmount;
  }
}

document.getElementById('deposit-button').addEventListener('click', function(){
  const depositInputAmount = getInputValue('deposit-input');
  updateTotalField('before-deposit-total', depositInputAmount);
  updateBalance(depositInputAmount, true);
})

document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawInputAmount = getInputValue('withdraw-input');
  updateTotalField('withdraw-field', withdrawInputAmount);
  updateBalance(withdrawInputAmount, false);
})
