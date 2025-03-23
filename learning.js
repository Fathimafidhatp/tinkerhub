// Get time from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const time = urlParams.get("time");

// Display time on page
document.getElementById("timeDisplay").innerText = `You have ${time} minutes. Here are some learning activities:`;

// Learning activities based on time
const activities = [
    { title: "Read an Article", description: "Read an article about a new topic.", minTime: 5 },
    { title: "Watch an Educational Video", description: "Watch a TED Talk or tutorial.", minTime: 10 },
    { title: "Listen to a Podcast", description: "Listen to an educational podcast.", minTime: 15 },
    { title: "Take an Online Course", description: "Enroll in a short online course.", minTime: 30 },
    { title: "Practice a New Language", description: "Use Duolingo or other language apps.", minTime: 20 },
    { title: "Read a Book Chapter", description: "Read a chapter from a non-fiction book.", minTime: 25 }
];

// Filter activities based on available time
const filteredActivities = activities.filter(activity => activity.minTime <= time);

// Display activities
const activityList = document.getElementById("activityList");
filteredActivities.forEach(activity => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${activity.title}</h3><p>${activity.description}</p><p><strong>Time Required:</strong> ${activity.minTime} min</p>`;
    activityList.appendChild(card);
});

// If no activities fit the time, show a message
if (filteredActivities.length === 0) {
    activityList.innerHTML = `<p>No learning activities fit within ${time} minutes. Try a longer session!</p>`;
}
function goBack() {
    window.location.href = "index.html"; // Redirect to the main page
}