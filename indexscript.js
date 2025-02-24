document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.getElementById("eventList");

    // Simulated event data (Replace with API call)
    const events = [
        { name: "🚀 Tech Innovations 2025", date: "March 10, 2025", time: "11:00 AM" },
        { name: "🎭 Virtual Networking Night", date: "March 15, 2025", time: "7:00 PM" },
        { name: "🧠 AI & ML Conference", date: "March 20, 2025", time: "3:00 PM" }
    ];

    // Load events dynamically
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `<h3>${event.name}</h3><p>${event.date} | ${event.time}</p>`;
        eventList.appendChild(eventCard);
    });
});
