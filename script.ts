const form = document.getElementById('resume-form') as HTMLFormElement;

// Get the display elements
const displayName = document.getElementById('display-name')!;
const displayEmail = document.getElementById('display-email')!;
const displayEducation = document.getElementById('display-education')!;
const displayWork = document.getElementById('display-work')!;
const displaySkills = document.getElementById('display-skills')!;
const resumeSection = document.getElementById('generated-resume')!;

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent page reload

    // Get user input from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Update the resume dynamically
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
    displayEducation.textContent = `Education: ${education}`;
    displayWork.textContent = `Work Experience: ${work}`;
    displaySkills.textContent = `Skills: ${skills}`;

    // Show the generated resume section
    resumeSection.classList.remove('hidden');
});