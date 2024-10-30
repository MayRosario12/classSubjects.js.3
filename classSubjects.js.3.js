// Function to collect user information about class subjects and categorize age
function collectClassInfo() {
    // Collecting user information through prompts
    var subjectTitle = prompt("DSA:");
    var classSchedule = prompt("8-9:00 AM - 11:12:30 AM, MWF:");
    var classroom = prompt("CLB:");
    var classInstructor = prompt("CO PASCUA:");
    var studentName = prompt("MAY ROSARIO:");
    var age = prompt("22:");

    // Categorizing age groups using nested if-else statements
    var ageGroup;

    if (age < 5) {
        ageGroup = "Toddler";
    } else if (age >= 5 && age <= 12) {
        ageGroup = "Child";
    } else if (age >= 13 && age <= 19) {
        ageGroup = "Teenager";
    } else if (age >= 20 && age <= 35) {
        ageGroup = "Young Adult";
    } else if (age >= 36 && age <= 60) {
        ageGroup = "Middle-Aged";
    } else {
        ageGroup = "Senior";
    }

    // Logging the formatted user information to the console
    console.log('${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.');
    console.log('${studentName} is categorized as: ${ageGroup}.');
}

// Calling the function to execute the prompts
collectClassInfo();