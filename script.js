var form = document.getElementById('resume-form');
// Get the display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
var displayWork = document.getElementById('display-work');
var displaySkills = document.getElementById('display-skills');
var resumeSection = document.getElementById('generated-resume');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    // Get user input from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value;
    // Update the resume dynamically
    displayName.textContent = "Name: ".concat(name);
    displayEmail.textContent = "Email: ".concat(email);
    displayEducation.textContent = "Education: ".concat(education);
    displayWork.textContent = "Work Experience: ".concat(work);
    displaySkills.textContent = "Skills: ".concat(skills);
    // Show the generated resume section
    resumeSection.classList.remove('hidden');
});
