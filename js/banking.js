function depositInput(){
    const depositInput=document.getElementById('deposit-amount');
    const depositAmountText=depositInput.value;
    const depositAmount=parseFloat(depositAmountText);
    depositInput.value=''
    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount=depositInput();
    // const depositInput=document.getElementById('deposit-amount');
    // const depositAmountText=depositInput.value;
    // const depositAmount=parseFloat(depositAmountText);

// get current deposit 
    const totalDeposit=document.getElementById('deposit-total');
    const totalDepositText=totalDeposit.innerText;
    const previousDepositAmount=parseFloat(totalDepositText);
    const newTotalDepositAmount=previousDepositAmount+depositAmount;
    totalDeposit.innerText=newTotalDepositAmount;
    // depositInput.value=''

    const depositBalance=document.getElementById('balance-total');
    const depositBalanceText=depositBalance.innerText;
    const depositTotalAmount=parseFloat(depositBalanceText);

    const newDepositBalance=depositTotalAmount+depositAmount;
    depositBalance.innerText=newDepositBalance;
})

// withdraw amount handle 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const withdrawAmountTotal=parseFloat(withdrawAmountText)
    
     const withdrawTotal=document.getElementById('withdraw-total');
     const withdrawTotalText=withdrawTotal.innerText;
     const previousWithdrawTotal=parseFloat(withdrawTotalText);
     const newWithdrawTotal=previousWithdrawTotal+withdrawAmountTotal;
     withdrawTotal.innerText=newWithdrawTotal;
     withdrawInput.value=''

     const balanceTotal=document.getElementById('balance-total');
     const previousBalanceTotalText=balanceTotal.innerText;
     const previousBalanceTotal=parseFloat(previousBalanceTotalText);
     const newBalanceTotal=previousBalanceTotal-withdrawAmountTotal;
     balanceTotal.innerText=newBalanceTotal;

})