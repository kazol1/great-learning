let monthlyActivities = [
    {
        id: 1,
        activity: "Complete exercise problems 1-7 from chapter -7",
        subject: "Math",
    },
    { id: 2, activity: "Write an essay on global warming", subject: "Science" },
];
window.onload = function () {
    populateMonthlyActivities();
};
function populateMonthlyActivities() {
    let dropdown = document.getElementById("monthly-activities-dropdown");

    dropdown.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select Subject";
    dropdown.add(defaultOption);

    monthlyActivities.forEach((activity) => {
        let option = document.createElement("option");
        option.text = activity.subject;
        dropdown.add(option);
    });
}

function showMonthlyActivities() {
    let selectedSubject = document.getElementById(
        "monthly-activities-dropdown"
    ).value;
    let activitiesList = document.getElementById("subject-wise-activities");

    // Clear previous activities
    activitiesList.innerHTML = "";

    // Filter activities based on selected subject
    let filteredActivities = monthlyActivities.filter(
        (activity) => activity.subject === selectedSubject
    );

    // Display activities
    filteredActivities.forEach((activity) => {
        let listItem = document.createElement("li");
        listItem.textContent = activity.activity;
        activitiesList.appendChild(listItem);
    });
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "student" && password === "password") {
        document.getElementById("home").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.querySelector("header").style.display = "flex";
        document.getElementById("timetable-section").style.display = "none";
    } else {
        alert("Invalid username or password");
    }
}
function showStudentData() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.getElementById("monthly-activities").style.display = "none";
    document.getElementById("student-information").style.display = "flex";
    document.getElementById("timetable-section").style.display = "none";
}
function showTimeTable() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.getElementById("monthly-activities").style.display = "none";
    document.getElementById("student-information").style.display = "none";
    document.getElementById("timetable-section").style.display = "block";
}
function showMonthlyActivitiew() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.getElementById("monthly-activities").style.display = "block";
    document.getElementById("student-information").style.display = "none";
    document.getElementById("timetable-section").style.display = "none";
}
// Event listener for login button
document.getElementById("login-button").addEventListener("click", login);
document
    .getElementById("student-profile")
    .addEventListener("click", showStudentData);
document
    .getElementById("time-table-section")
    .addEventListener("click", showTimeTable);

document
    .getElementById("monthly-activities-link")
    .addEventListener("click", showMonthlyActivitiew);
