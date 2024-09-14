var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // const username = (document.getElementById('username') as HTMLInputElement).value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var professionalSummary = document.getElementById('professional-summary').value;
    var proffession = document.getElementById('profession').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h1><strong>".concat(name, "</span></h1>\n    <h3 >").concat(proffession, "</h3>\n    <h4><strong>Personal Info</strong></h4>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n    <p><strong>LinkedIn URL:</strong>").concat(linkedin, "</p>\n    <h4>About Me</h4>\n    <p><strong>Professional Summary:</strong>").concat(professionalSummary, "</p>\n    <h4><strong>Education</strong></h4>\n    <p >").concat(education, "</p>\n    <h4 >Work Experience</h4>\n    <p >").concat(workExperience, "</p>\n    <h4>Skills</h4>\n    <p >").concat(skills, "</p>");
    // ${window.location.pathname}
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.log('The resume display is not working!');
    }
});
