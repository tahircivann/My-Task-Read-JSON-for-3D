"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const alreadyAdded = new Set();
console.log("Hello from index.ts");
document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) {
        console.error("Container for projects not found");
        return;
    }
    const appendProjectToDOM = (project) => {
        if (alreadyAdded.has(`${project.source}-${project.hash}`))
            return; // Prevent duplicate entries
        alreadyAdded.add(`${project.source}-${project.hash}`);
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `<h2>${project.title}</h2><p>Total Rooms: ${project.totalRooms}</p><p>Total Floors: ${project.totalFloors}</p>`;
        projectsContainer.appendChild(projectElement);
    };
    const fetchProjectDetails = (project) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(() => resolve(project), Math.random() * 1000));
    });
    let projectsLoaded = false;
    console.log("Loading projects...");
    const loadProjects = () => __awaiter(void 0, void 0, void 0, function* () {
        if (projectsLoaded) {
            console.log("Projects are already loaded.");
            return;
        }
        projectsLoaded = true;
        console.log("Fetching projects...");
        // Clear the alreadyAdded set before each fetch
        alreadyAdded.clear();
        const response = yield fetch('projects.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        const projects = yield response.json();
        try {
            const fetchedProjects = yield Promise.all(projects.map(fetchProjectDetails));
            fetchedProjects.forEach(appendProjectToDOM);
        }
        catch (error) {
            console.error("Error fetching project details:", error);
        }
    });
    try {
        loadProjects();
    }
    catch (error) {
        console.error("Error during DOM initialization:", error);
    }
});
//# sourceMappingURL=index.js.map