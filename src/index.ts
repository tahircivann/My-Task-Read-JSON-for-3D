interface Project {
    hash: string;
    title: string;
    url: string;
    totalRooms: number;
    totalFloors: number;
    source: string; // Add a property to indicate the source JSON file

}
const alreadyAdded = new Set();
console.log("Hello from index.ts");

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) {
        console.error("Container for projects not found");
        return;
    }


    const appendProjectToDOM = (project: Project) => {
        if (alreadyAdded.has(`${project.source}-${project.hash}`)) return; // Prevent duplicate entries
        alreadyAdded.add(`${project.source}-${project.hash}`);

        const projectElement = document.createElement("div");
        projectElement.innerHTML = `<h2>${project.title}</h2><p>Total Rooms: ${project.totalRooms}</p><p>Total Floors: ${project.totalFloors}</p>`;
        projectsContainer.appendChild(projectElement);
    };

    const fetchProjectDetails = async (project: Project): Promise<Project> => {
        return new Promise(resolve => setTimeout(() => resolve(project), Math.random() * 1000));
    };

    let projectsLoaded = false;
    console.log("Loading projects...");

    const loadProjects = async (): Promise<void> => {
        if (projectsLoaded) {
            console.log("Projects are already loaded.");
            return;
        }
        projectsLoaded = true;
        console.log("Fetching projects...");

        // Clear the alreadyAdded set before each fetch
        alreadyAdded.clear();

        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        const projects: Project[] = await response.json();

        try {
            const fetchedProjects = await Promise.all(projects.map(fetchProjectDetails));
            fetchedProjects.forEach(appendProjectToDOM);
        } catch (error) {
            console.error("Error fetching project details:", error);
        }
    };
    try {
        loadProjects();
    } catch (error) {
        console.error("Error during DOM initialization:", error);
    }
});