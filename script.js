let chart;

function calculateRisk(attendance, score) {
  if (attendance < 70 || score < 60) {
    return "High Risk";
  } else if (attendance < 80) {
    return "Moderate Risk";
  } else {
    return "Low Risk";
  }
}

function updateDashboard() {
  const attendance = parseInt(document.getElementById("attendance").value);
  const score = parseInt(document.getElementById("score").value);

  const risk = calculateRisk(attendance, score);
  document.getElementById("risk").innerText = risk;

  const ctx = document.getElementById("chart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Attendance", "Score"],
      datasets: [{
        label: "Performance %",
        data: [attendance, score]
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
}
