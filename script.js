const API_URL = "https://animal-safety-backend.onrender.com/api/reports";

// SUBMIT FORM
document.getElementById("reportForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    location: document.getElementById("location").value,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert("Report submitted!");

    loadReports(); // refresh list
  } catch (error) {
    console.log(error);
    alert("Error submitting report");
  }
});

// LOAD REPORTS
async function loadReports() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("reports");
    container.innerHTML = "";

    data.forEach((report) => {
      container.innerHTML += `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <h3>${report.title}</h3>
          <p>${report.description}</p>
          <p><b>Location:</b> ${report.location}</p>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

// LOAD ON PAGE OPEN
loadReports();