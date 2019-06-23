import projects from './components/projects';

import 'bootstrap';
import '../styles/main.scss';

import projectsData from './helpers/data/projectsData';

const printToDom = (id, print) => {
  document.getElementById(id).innerHTML = print;
};

const projectsClick = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div id="projectsPage"><h4>';
      domString += `<p>Title: ${project.title}</p>`;
      domString += `<img src="${project.screenshot}">`;
      domString += `<p>Description: ${project.description}</p>`;
      domString += `<p>Technologies Used: ${project.technologiesUsed}</p>`;
      domString += `<p>URL: ${project.url}</p>`;
      domString += `<p>GitHubURL: <a href="https://github.com/GitMullins">${project.githubUrl}</a></p>`;
      domString += '</h4></div>';
    }
  });
  printToDom('projectsFill', domString);
};

const bioClick = () => {
  const message = `<div id='bioPage' class='card col-3' style='width: 36rem;'>
    <h3 class='card-title'><u><b>My Background:</b></u></h3>
    <b>Current employer:</b> Tennessee Dept. of Revenue<br>
    <b>Job Title:</b> Tax Auditor (Nov. 2014 - current)<br>
    Revenue Officer (Jan. 2013 - October 2013)<br>
    </div>
    <div id='bioPage' class='card col-3' style='width: 36rem;'>
    <h3 class='card-title'><u><b>What I love about development:</b></u></h3>
    <p class='card-text'>I love problem solving, and I love that development can be basic or complex depending on the project. 
    The field offers a limitless amount of possibilities to solve a problem, and techniques vary between developers. 
    Development allows me to problem-solve and create solutions that I see the most value in.</p>
    </div>
    <div id='bioPage' class='card col-3' style='width: 36rem;'>
    <h3 class='card-title'><u><b>Why I want to go into development:</b></u></h3>
    <p class='card-text'>I enjoy creating efficiency: I recognize the value in making jobs easier, automatized tasks, and gathering/providing useful data. 
    I also have a unique interest in solving problems or creating something that can benefit a lot of people.</p>
    </div>`;
  printToDom('bioFill', message);
};

const techClick = () => {
  const message = `<div class='fullPage' id='technologiesPage'>
    <h2><b><u>Technologies:</u></b></h2>
    <ul>
    <li>GitBash</li>
    <li>HTML/CSS</li>
    <li>JavaScript</li>
    </ul></div>`;
  printToDom('techFill', message);
};


const navBtns = () => {
  document.getElementById('navToBio').addEventListener('click', bioClick);
  document.getElementById('navToTechnologies').addEventListener('click', techClick);
  document.getElementById('navToProjects').addEventListener('click', projectsClick);
};

const init = () => {
  bioClick();
  techClick();
  projectsData.getAllProjects()
    .then(projects => projectsClick(projects))
    .catch(err => console.error('no projects', err));
  navBtns();
};

init();
