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
    const selectedId = document.getElementById(id);
    selectedId.innerHTML = print;
}

const createProjectCards = () => {
    let domString ='';
    for (let i=0; i<projects.length; i++){
        if(projects[i].available == true){
        domString += '<h4>';
        domString += `<p>Title: ${projects[i].title}</p>`;
        domString += `<p>Screenshot: ${projects[i].screenshot}</p>`;
        domString += `<p>Description: ${projects[i].description}</p>`;
        domString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`;
        domString += `<p>URL: ${projects[i].url}</p>`;
        domString += `<p>GitHubURL: <a href="https://github.com/GitMullins">${projects[i].githubUrl}</a></p>`;
        domString += '</h4>'
    }
    printToDom('projectsPage', domString);
}
}

const init = () => {
    createProjectCards();
}

init();