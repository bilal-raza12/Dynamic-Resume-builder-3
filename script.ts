

const form = document.getElementById('resume-form') as HTMLInputElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;


// 
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const professionalSummary = (document.getElementById('professional-summary') as HTMLTextAreaElement).value;
    const proffession = (document.getElementById('profession') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    

    const resumeHTML = `
    <h1><strong>${name}</span></h1>
    <h3 >${proffession}</h3>
    <h4><strong>Personal Info</strong></h4>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <p><strong>Address:</strong>${address}</p>
    <p><strong>LinkedIn URL:</strong>${linkedin}</p>
    <h4>About Me</h4>
    <p><strong>Professional Summary:</strong>${professionalSummary}</p>
    <h4><strong>Education</strong></h4>
    <p>${education}</p>
    <h4>Work Experience</h4>
    <p>${workExperience}</p>
    <h4>Skills</h4>
    <p >${skills}</p>`;
    // ${window.location.pathname}
    if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHTML;
    }else{
        console.log('The resume display is not working!')
    }

});

