document.getElementById('ageCalculator').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
  
    if (!birthdate || birthdate > today) {
      document.getElementById('result').textContent = 'Please enter a valid birthdate.';
      return;
    }
  
    const ageYears = today.getFullYear() - birthdate.getFullYear();
    const ageMonths = today.getMonth() - birthdate.getMonth();
    const ageDays = today.getDate() - birthdate.getDate();
  
    let finalAgeYears = ageYears;
    let finalAgeMonths = ageMonths;
    let finalAgeDays = ageDays;
  
    if (ageDays < 0) {
      finalAgeMonths -= 1;
      finalAgeDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      finalAgeYears -= 1;
      finalAgeMonths += 12;
    }
  
    document.getElementById('result').textContent =
      `You are ${finalAgeYears} years, ${finalAgeMonths} months, and ${finalAgeDays} days old.`;
  });
  