function calculateSIP() {
  
     const monthlyInvestment = parseFloat(document.getElementById("monthlyInvest").value);
     const expectedReturn = parseFloat(document.getElementById("expected").value) / 100;
     const investmentPeriod = parseInt(document.getElementById("Period").value);
   
     
     let futureValue = 0;
     for (let i = 0; i < investmentPeriod * 12; i++) {
       futureValue = (futureValue + monthlyInvestment) * (1 + expectedReturn / 12);
     }
   
     let investedAmt = monthlyInvestment * 12 * investmentPeriod;
     let estReturns = futureValue - investedAmt;
   
     document.getElementById("x").textContent = "Invested Amount for " + investmentPeriod + " years: ₹" + investedAmt.toFixed(2);
     document.getElementById("y").textContent = "Est. Returns " + ": ₹" + estReturns.toFixed(2);
     
   
     
     document.getElementById("z").textContent = "Your estimated corpus after " + investmentPeriod + " years: ₹" + futureValue.toFixed(2);
     }
   
     function calculateLumpSum() {
  
          const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
          const expectedReturn = parseFloat(document.getElementById("expectedReturn").value) / 100;
          const investmentPeriod = parseInt(document.getElementById("investmentPeriod").value);
        
          
          const futureValue = initialInvestment * Math.pow((1 + expectedReturn), investmentPeriod);
        
          let investedAmt = initialInvestment;
          let estReturns = futureValue - investedAmt;
        
          document.getElementById("inv").textContent = "Invested Amount for " + investmentPeriod + " years: ₹" + investedAmt.toFixed(2);
          document.getElementById("ret").textContent = "Est. Returns " + ": ₹" + estReturns.toFixed(2);
        
          
          document.getElementById("result").textContent = "Your estimated corpus after " + investmentPeriod + " years: ₹" + futureValue.toFixed(2);
        }
        