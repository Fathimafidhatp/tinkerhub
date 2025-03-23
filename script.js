document.getElementById("showActivity").addEventListener("click", function () {
    const time = document.getElementById("time").value;
    const activity = document.getElementById("activity").value;

    if (!activity) {
        alert("Please select an activity!");
        return;
    }
    
    if (!time || time < 1) {
        alert("Please enter a valid time!");
        return;
    }

    let targetPage = "";

    switch (activity) {
        case "learning":
            targetPage = "learning.html";
            break;
        case "skill":
            targetPage = "skills.html";
            break;
        case "fitness":
            targetPage = "health.html";
            break;
        case "creativity":
            targetPage = "creative.html";
            break;
        case "planning":
            targetPage = "cooking.html";
            break;
        case "networking":
            targetPage = "networking.html";
            break;
        case "side_project":
            targetPage = "sideproject.html";
            break;
        default:
            alert("Something went wrong. Please try again!");
            return;
    }

    window.location.href = `${targetPage}?time=${time}`;
});
