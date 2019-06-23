import axios from 'axios';

const firebaseUrl = 'https://personal-bio-site-9526f.web.app/';

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectResults = results.data;
      const projects = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projects.push(projectResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getAllProjects };
