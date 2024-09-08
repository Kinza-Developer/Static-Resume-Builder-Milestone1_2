var form = document.getElementById('resume-form');
// Get the display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
var displayWork = document.getElementById('display-work');
var displaySkills = document.getElementById('display-skills');
var resumeSection = document.getElementById('generated-resume');
// Get the elements for the shareable link and download button
var shareLink = document.getElementById('share-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission to generate the resume
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
    // Generate a shareable link (you can customize the URL)
    var resumeUrl = "https://static-resume-builder-milestone1-2.vercel.app/".concat(name);
    shareLink.value = resumeUrl;
});
// Download the resume as a PDF
downloadPdfButton.addEventListener('click', function () {
    var resumeContent = resumeSection.innerHTML;
    // Create a PDF blob
    var blob = new Blob([resumeContent], { type: 'application/pdf' });
    // Create a link and download the PDF
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
});
