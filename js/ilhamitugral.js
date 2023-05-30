import data from './data.json' assert {type: 'json'};

// Let's load information by JSON file.
window.onload = () => {

    // Let's edit basic datas
    const datas = {
        'portfolio-fullname': data.fullname,
        'portfolio-title': data.title,
        'portfolio-email': data.contact.email,
        'portfolio-phone': data.contact.phone,
        'portfolio-location': data.location
    }

    // Let's update avatar
    document.querySelector('.portfolio-avatar .avatar').setAttribute('style', 'background-image: url(\'https://avatars.githubusercontent.com/u/38791905\');');

    // I want update this variables
    let toolsAndTechnologies = '';
    let otherSkills = '';

    // We need use one loop. Because I want optimized website.
    // I shoould use for loop.
    // Let's calculate max() data size.
    const max = Math.max(
        Object.keys(datas).length,
        data.industryKnowledge.length,
        data.toolsAndTechnologies.length,
        data.otherSkills.length,
        data.languages.length,
        data.social.length,
        data.experiences.length,
        data.education.length
    );

    // Now, let's create a for loop.
    for(let i = 0; i < max; i++) {
        
        if(i < Object.keys(datas).length) {

            // Basic Information
            document.getElementsByClassName(Object.keys(datas)[i])[0].innerText = Object.values(datas)[i];
        }

        if(i < data.industryKnowledge.length) {

            // Industry Knowledge
            document.getElementsByClassName('portfolio-industry-knowledge')[0].insertAdjacentHTML('beforeend', `
                <span class="section-field">${data.industryKnowledge[i]}</span>
            `);
        }

        if(i < data.toolsAndTechnologies.length) {
            
            // Tools and Technologies
            toolsAndTechnologies += data.toolsAndTechnologies[i] + ', ';
        }

        if(i < data.otherSkills.length) {

            // Other Skills
            otherSkills += data.otherSkills[i] + ', ';
        }

        if(i < data.languages.length) {

            // Languages
            document.getElementsByClassName('portfolio-languages')[0].insertAdjacentHTML('beforeend', `
                <span class="section-field">${data.languages[i]}</span>
            `);
        }

        if(i < data.social.length) {

            // Social
            document.getElementsByClassName('portfolio-social')[0].insertAdjacentHTML('beforeend', `
                <span class="section-field"><a href="//${data.social[i]}" rel="nofollow">${data.social[i]}</a></span>
            `);
        }

        if(i < data.experiences.length) {

            // Calculate experiences
            const element = data.experiences[i];
            document.getElementsByClassName('experiences-panel')[0].insertAdjacentHTML('beforeend', `
                <div class="experience-panel">
                    <h4 class="experience-title">${element.title}</h4>
                    <span class="experience-company">${element.company}</span>
                    <span class="experience-date">${element.startDate} - ${element.endDate}, ${element.location}</span>
                    <p class="experience-detail">${element.description}</p>
                </div>
            `);
        }

        if(i < data.education.length) {

            // Calculate education info
            const element = data.education[i];
            document.getElementsByClassName('education-panel')[0].insertAdjacentHTML('beforeend', `
                <div class="experience-panel">
                    <h4 class="experience-title">${data.education[i].school}</h4>
                    <span class="experience-date">${data.education[i].startDate} - ${data.education[i].endDate}, ${data.education[i].location}</span>
                </div>
            `);
        }
    }

    // Let's fix some problems.
    toolsAndTechnologies = document.getElementsByClassName('portfolio-tools-and-technologies')[0].innerText = toolsAndTechnologies.substring(0, toolsAndTechnologies.length - 2);
    otherSkills = document.getElementsByClassName('portfolio-other-skills')[0].innerText = otherSkills.substring(0, otherSkills.length - 2);
}