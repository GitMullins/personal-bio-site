let projects = [
    {
        title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/GitMullins",
  githubUrl: "https://github.com/GitMullins"
    },
    {
        title: '123',
  screenshot: '456',
  description: '789',
  technologiesUsed: '000',
  available: false,
  url: '222',
  githubUrl1: '333'
    },
];

const printToDom = (id, print) => {
    document.getElementById(id).innerHTML = print;
};

const remove = (divId) => {
    document.getElementById(divId).remove();
};

const projectsClick = () => {
    let domString ='';
    for (let i=0; i<projects.length; i++){
        if(projects[i].available == true){
        domString += '<div id="projectsPage"><h4>';
        domString += `<p>Title: ${projects[i].title}</p>`;
        domString += `<p>Screenshot: ${projects[i].screenshot}</p>`;
        domString += `<p>Description: ${projects[i].description}</p>`;
        domString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`;
        domString += `<p>URL: ${projects[i].url}</p>`;
        domString += `<p>GitHubURL: <a href="https://github.com/GitMullins">${projects[i].githubUrl}</a></p>`;
        domString += '</h4></div>'
    }
    printToDom('projectsPage', domString);
}
};

const bioClick = () => {
    let message = `<div class='card' id='background'>
    <h3><u><b>My Background:</b></u></h3>
    <b>Current employer:</b> Tennessee Dept. of Revenue<br>
    <b>Job Title:</b> Tax Auditor (Nov. 2014 - current)<br>
    Revenue Officer (Jan. 2013 - October 2013)<br>
    </div>
    <div class='card' id='loveDev'>
    <h3><u><b>What I love about development:</b></u></h3>
    I love problem solving, and I love that development can be basic or complex depending on the project. The field offers a limitless amount of possibilities to solve a problem, and techniques vary between developers. Development allows me to problem-solve and create solutions that I see the most value in.
    </div>
    <div class='card' id='whyDev'>
    <h3><u><b>Why I want to go into development:</b></u></h3>
    I enjoy creating efficiency: I recognize the value in making jobs easier, automizing tasks, and gathering/providing useful data. I also have a unique interest in solving problems or creating something that can benefit a lot of people. <br> 
    </div>`;
        printToDom('bioFill', message);
        remove('technologiesPage');
        remove('projectsPage');
};

const techClick = () => {
    let message = `  <div class="fullPage" id="technologiesPage">
    <h2><b><u>Technologies:</u></b></h2>
    <ul>
    <li>GitBash</li>
    <li>HTML/CSS</li>
    <li>JavaScript</li>
    </ul></div>`
        printToDom('techFill', message);
        remove('projectsPage');
        remove('bioFill')

};


const navBtns = () => {
document.getElementById('navToBio').addEventListener('click', bioClick);
document.getElementById('navToTechnologies').addEventListener('click', techClick);
document.getElementById('navToProjects').addEventListener('click', projectsClick);
};

const init = () => {
    navBtns();
};

init();