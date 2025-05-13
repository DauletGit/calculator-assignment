function calculatePrice() {
  let base = 100;
  let education = parseFloat(document.getElementById("education").value);
  let networth = parseFloat(document.getElementById("networth").value);
  let caste = parseInt(document.getElementById("caste").value);

  let skills = document.querySelectorAll(".skill:checked");
  let skillBonus = 0;
  skills.forEach(s => skillBonus += parseInt(s.value));

  let ageCoeff = 1;
  document.querySelectorAll("input[name='age']").forEach(r => {
    if (r.checked) ageCoeff = parseFloat(r.value);
  });

  let repCoeff = 1;
  let repPenalty = 0;
  document.querySelectorAll(".reputation:checked").forEach(r => {
    if (r.value < 1) repCoeff *= parseFloat(r.value);
    else repPenalty += parseInt(r.value);
  });

  let final = base * education * networth * ageCoeff * repCoeff + caste + skillBonus + repPenalty;
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "Final Dowry Price: $" + final.toFixed(2);
  resultDiv.style.color = final >= 200 ? "green" : "red";
}
