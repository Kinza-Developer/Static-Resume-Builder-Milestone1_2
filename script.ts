const form = document.getElementById('resume-form') as HTMLFormElement;

// Get the display elements
const displayName = document.getElementById('display-name')!;
const displayEmail = document.getElementById('display-email')!;
const displayEducation = document.getElementById('display-education')!;
const displayWork = document.getElementById('display-work')!;
const displaySkills = document.getElementById('display-skills')!;
const resumeSection = document.getElementById('generated-resume')!;

// Get the elements for the shareable link and download button
const shareLink = document.getElementById('share-link') as HTMLInputElement;
const downloadPdfButton = document.getElementById('download-pdf')!;

// Handle form submission to generate the resume
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

    // Generate a shareable link (you can customize the URL)
    const resumeUrl = `https://static-resume-builder-milestone1-2.vercel.app/${name}`;
    shareLink.value = resumeUrl;
});

    // Download the resume as a PDF
    downloadPdfButton.addEventListener('click', () => {
    const resumeContent = resumeSection.innerHTML;

    // Create a PDF blob
    const blob = new Blob([resumeContent], { type: 'application/pdf' });

    // Create a link and download the PDF
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
});

     