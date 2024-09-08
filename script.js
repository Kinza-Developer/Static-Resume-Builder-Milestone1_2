var toggleEducationButton = document.getElementById('toggle-education');
var educationSection = document.getElementById('education');
toggleEducationButton.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    }
    else {
        educationSection.style.display = 'none';
    }
});
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
var toggleWorkExperienceButton = document.getElementById('toggle-work-experience');
var workExperienceSection = document.getElementById('work-experience');
toggleWorkExperienceButton.addEventListener('click', function () {
    if (workExperienceSection.style.display === 'none') {
        workExperienceSection.style.display = 'block';
    }
    else {
        workExperienceSection.style.display = 'none';
    }
});
