function calculateInterest(){
    try{
        //getting users input
        let deposit = document.getElementById("deposit").value;
        let interestRate = document.getElementById("interestRate").value/100;
        let investmentTerm = document.getElementById("investmentTerm").value;
        let interestPaid = document.querySelector('input[name="interestPaid"]:checked').value;

        let final = document.getElementById("final");

        // making sure all fields are populated
        if(deposit == null || deposit == "" || interestRate == null || interestRate == "" || investmentTerm == null || investmentTerm == "" || interestPaid == null || interestPaid == ""){
            throw new Error("Unpopulated Field");
        }
        let numberOfTimesCompounded = 1; 
        //uses formula P * (1 + i/t)^nt for compound interest
        if(interestPaid == "Monthly" || interestPaid == "Quarterly" || interestPaid == "Annually"){
            if(interestPaid == "Monthly"){
                numberOfTimesCompounded = investmentTerm * 12;
            }
            else if(interestPaid == "Quarterly"){
                numberOfTimesCompounded = investmentTerm * 4;

            }
            else if(interestPaid == "Annually"){
                numberOfTimesCompounded = 1;
            }
            let termDeposit =Math.round(deposit * (1 + interestRate/numberOfTimesCompounded)**(numberOfTimesCompounded*investmentTerm));
            console.log("term deposit" + termDeposit);
            final.textContent = "Final Balance: " + termDeposit;

        }
        // uses formula P(1 * i * t) for maturity
        else{
            let termDepositMaturity = Math.round(deposit * (1 +interestRate * investmentTerm));
            console.log("maturity deposit" + termDepositMaturity);
            final.textContent = "Final Balance: " + termDepositMaturity;

        

        }
        }
        //exception to tell users a field hasn't been populated
        catch(e){
            final.textContent = "Make sure all field are populated, and one radio button is checked" ;
 

        }


}