import { scrapeProjects } from './scraper';
import './styles.css';

const renderProjects = async () => {
    const projects = await scrapeProjects();
    console.log(projects);
    const projectsContainer = document.getElementById('projects');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';

            const titleElement = document.createElement('h2');
            titleElement.textContent = project.title;
            projectElement.appendChild(titleElement);

            const hashElement = document.createElement('p');
            hashElement.textContent = `Hash: ${project.hash}`;
            projectElement.appendChild(hashElement);

            const roomsElement = document.createElement('p');
            roomsElement.textContent = `Total Rooms: ${project.totalRooms}`;
            projectElement.appendChild(roomsElement);

            const floorsElement = document.createElement('p');
            floorsElement.textContent = `Total Floors: ${project.totalFloors}`;
            projectElement.appendChild(floorsElement);

            // Add a button to open the project in the custom view page
            const openButton = document.createElement('button');
            openButton.textContent = 'Open Project';
            openButton.onclick = () => {
                window.open(`http://127.0.0.1:3001/view.html?hash=${project.hash}&title=${encodeURIComponent(project.title)}&rooms=${project.totalRooms}&floors=${project.totalFloors}`, '_blank');
            }
            projectElement.appendChild(openButton);

            projectsContainer.appendChild(projectElement);
        });
    }
};

renderProjects();