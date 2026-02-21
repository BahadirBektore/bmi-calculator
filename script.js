function calculateBMI() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  const resultDiv = document.getElementById("result");

  if (!weight || !height) {
    alert("Please fill in all required fields!");
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = bmi.toFixed(1);

  let category = "";
  let className = "";

  if (bmi < 18.5) {
    category = "Underweight";
    className = "underweight";
  } else if (bmi < 25) {
    category = "Normal";
    className = "normal";
  } else {
    category = "Overweight";
    className = "overweight";
  }

  resultDiv.className = `result-card ${className}`;
  resultDiv.innerHTML = `
    BMI: ${roundedBMI} <br>
    Status: ${category}
  `;
}