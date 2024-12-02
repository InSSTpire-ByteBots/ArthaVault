// Utility function to format currency
function formatCurrency(amount) {
  return `₹${amount.toFixed(2)}`;
}

// Calculate SIP (Systematic Investment Plan)
function calculateSIP() {
  const monthlyInvestment = parseFloat(document.getElementById("monthlyInvest").value);
  const expectedAnnualReturn = parseFloat(document.getElementById("expected").value) / 100;
  const investmentPeriod = parseInt(document.getElementById("Period").value);
  
  const monthlyRate = expectedAnnualReturn / 12;
  const totalMonths = investmentPeriod * 12;
  
  // Calculate future value using SIP formula
  const futureValue = monthlyInvestment * 
      (Math.pow(1 + monthlyRate, totalMonths) - 1) / 
      monthlyRate * 
      (1 + monthlyRate);
  
  const totalInvestedAmount = monthlyInvestment * totalMonths;
  const estimatedReturns = futureValue - totalInvestedAmount;

  // Display results
  document.getElementById("x").textContent = 
      `Invested Amount for ${investmentPeriod} years: ${formatCurrency(totalInvestedAmount)}`;
  document.getElementById("y").textContent = 
      `Est. Returns: ${formatCurrency(estimatedReturns)}`;
  document.getElementById("z").textContent = 
      `Your estimated corpus after ${investmentPeriod} years: ${formatCurrency(futureValue)}`;
}

// Calculate Lumpsum Investment
function calculateLumpSum() {
  const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
  const expectedAnnualReturn = parseFloat(document.getElementById("expectedReturn").value) / 100;
  const investmentPeriod = parseInt(document.getElementById("investmentPeriod").value);
  
  const futureValue = initialInvestment * Math.pow((1 + expectedAnnualReturn), investmentPeriod);
  const estimatedReturns = futureValue - initialInvestment;

  // Display results
  document.getElementById("inv").textContent = 
      `Invested Amount for ${investmentPeriod} years: ${formatCurrency(initialInvestment)}`;
  document.getElementById("ret").textContent = 
      `Est. Returns: ${formatCurrency(estimatedReturns)}`;
  document.getElementById("result").textContent = 
      `Your estimated corpus after ${investmentPeriod} years: ${formatCurrency(futureValue)}`;
}

// Toggle between SIP and Lumpsum calculators
function ShowSIP() {
  document.getElementById("lump").style.display = "none";
  document.getElementById("SIP").style.display = "flex";
}

function ShowLumpSum() {
  document.getElementById("SIP").style.display = "none";
  document.getElementById("lump").style.display = "flex";
}