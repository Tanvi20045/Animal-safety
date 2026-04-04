// 🔹 API URL (use once)
const API_URL = "https://animal-safety-backend.onrender.com/api/reports";


// 🔹 1. Smooth Scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}


// 🔹 2. Load Reports (GET)
async function loadReports() {
    const container = document.getElementById("reports");
    if (!container) return;

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        container.innerHTML = "";

        data.forEach(report => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>${report.title}</h3>
                <p>${report.description}</p>
                <p>${report.location}</p>
                <hr>
            `;
            container.appendChild(div);
        });

    } catch (err) {
        console.log("Error loading reports:", err);
    }
}


// 🔹 3. Report Form (POST)
function setupReportForm() {
    const form = document.getElementById("reportForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            location: document.getElementById("location").value,
        };

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            await res.json();

            alert("✅ Report submitted!");

            form.reset();        // 🔥 clear form
            loadReports();       // 🔥 refresh list

        } catch (error) {
            console.log("Error submitting:", error);
            alert("❌ Failed to submit");
        }
    });
}


// 🔹 4. Run safely on page load
window.addEventListener("DOMContentLoaded", () => {
    loadReports();
    setupReportForm();
});