// ===============================
// 🔥 BASE BACKEND URL
// ===============================
const BASE_URL = "https://animal-safety-backend.onrender.com";

const API = {
    reports: `${BASE_URL}/api/reports`,
    adoption: `${BASE_URL}/api/adoption`,
    rescue: `${BASE_URL}/api/rescue`,
    volunteer: `${BASE_URL}/api/volunteer`,
    donation: `${BASE_URL}/api/donation`,
};

// ===============================
// 📊 REPORT FORM
// ===============================
function setupReportForm() {
    const form = document.getElementById("reportForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            title: form.title.value,
            description: form.description.value,
            location: form.location.value,
        };

        try {
            const res = await fetch(API.reports, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Server error");

            alert("📊 Report submitted!");
            form.reset();
            loadReports();

        } catch (err) {
            console.log(err);
            alert("❌ Failed to submit report");
        }
    });
}

// ===============================
// 📊 LOAD REPORTS
// ===============================
async function loadReports() {
    const container = document.getElementById("reports");
    if (!container) return;

    try {
        const res = await fetch(API.reports);
        const data = await res.json();

        container.innerHTML = "";

        data.forEach(r => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>${r.title}</h3>
                <p>${r.description}</p>
                <p>${r.location}</p>
                <hr>
            `;
            container.appendChild(div);
        });

    } catch (err) {
        console.log(err);
    }
}

// ===============================
// 🐾 ADOPTION FORM
// ===============================
function setupAdoptionForm() {
    const form = document.getElementById("adoptionForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            address: form.address.value,
            animal: form.animal.value,
            reason: form.reason.value,
        };

        try {
            const res = await fetch(API.adoption, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Server error");

            alert("✅ Adoption request submitted!");
            form.reset();

        } catch (err) {
            console.log(err);
            alert("❌ Failed to submit adoption");
        }
    });
}

// ===============================
// 🚨 RESCUE FORM
// ===============================
function setupRescueForm() {
    const form = document.getElementById("rescueForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            phone: form.phone.value,
            location: form.location.value,
            message: form.message.value,
        };

        try {
            const res = await fetch(API.rescue, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Server error");

            alert("🚨 Rescue request submitted!");
            form.reset();

        } catch (err) {
            console.log(err);
            alert("❌ Failed to submit rescue");
        }
    });
}

// ===============================
// 🤝 VOLUNTEER FORM
// ===============================
function setupVolunteerForm() {
    const form = document.getElementById("volunteerForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            location: form.location.value,
            skills: form.skills.value,
        };

        try {
            const res = await fetch(API.volunteer, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Server error");

            alert("🤝 Volunteer submitted!");
            form.reset();

        } catch (err) {
            console.log(err);
            alert("❌ Failed to submit volunteer");
        }
    });
}

// ===============================
// 💰 DONATION FORM
// ===============================
function setupDonationForm() {
    const form = document.getElementById("donationForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            amount: form.amount.value,
        };

        try {
            const res = await fetch(API.donation, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Server error");

            alert("💰 Donation submitted!");
            form.reset();

        } catch (err) {
            console.log(err);
            alert("❌ Failed to submit donation");
        }
    });
}

// ===============================
// 🚀 INIT ALL
// ===============================
window.addEventListener("DOMContentLoaded", () => {
    loadReports();
    setupReportForm();
    setupAdoptionForm();
    setupRescueForm();
    setupVolunteerForm();
    setupDonationForm();
});