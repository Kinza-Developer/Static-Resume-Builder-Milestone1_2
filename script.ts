const toggleEducationButton = document.getElementById('toggle-education')!;
const educationSection = document.getElementById('education')!;

toggleEducationButton.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    } else {
        educationSection.style.display = 'none';
    }
});
const toggleSkillsButton = document.getElementById('toggle-skills')!;
const skillsSection = document.getElementById('skills')!;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
const toggleWorkExperienceButton = document.getElementById('toggle-work-experience')!;
const workExperienceSection = document.getElementById('work-experience')!;

toggleWorkExperienceButton.addEventListener('click', () => {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
    } else {
        workExperienceSection.style.display = 'none';
    }
});