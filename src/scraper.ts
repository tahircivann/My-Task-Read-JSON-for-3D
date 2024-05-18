import axios from 'axios';
import { Project } from './types';
import { projectLinks } from './links';

const proxyUrl = 'http://localhost:3001/proxy?url=';

// Function to fetch and parse JSON data
export const fetchProjectJson = async (hashKey: string): Promise<any> => {
    const jsonUrl = `https://planner5d.com/api/project/${hashKey}?{}&_=${new Date().getTime()}`;
    const { data } = await axios.get(`${proxyUrl}${encodeURIComponent(jsonUrl)}`);
    return data;
};

export const getProjectData = async (link: string): Promise<Project> => {
    try {
        // Extract the hash key from the URL
        const urlParams = new URLSearchParams(new URL(link).search);
        const hashKey = urlParams.get('key');

        if (!hashKey) {
            throw new Error('Hash key not found in URL');
        }

        const projectJson = await fetchProjectJson(hashKey);

        // Ensure the structure is what we expect
        console.log(JSON.stringify(projectJson, null, 2));

        const items = projectJson.items || [];
        const title = items[0]?.name || 'No title';
        const dataItems = items[0]?.data?.items || [];

        // Initialize counters
        let totalRooms = 0;
        let totalFloors = 0;

        // Traverse dataItems to count floors and rooms
        dataItems.forEach((item: any) => {
            if (item.className === 'Floor') {
                totalFloors += 1;

                if (item.items) {
                    item.items.forEach((subItem: any) => {
                        if (subItem.className === 'Room') {
                            totalRooms += 1;
                        }
                    });
                }
            }
        });

        return { hash: hashKey, title, totalRooms, totalFloors };
    } catch (error) {
        console.error(`Error fetching project data for URL: ${link}`, error);
        throw error;
    }
};

export const scrapeProjects = async (): Promise<Project[]> => {
    const projects: Project[] = [];
    const promises = projectLinks.map((link) => getProjectData(link));

    while (promises.length) {
        const batch = promises.splice(0, 3);
        const results = await Promise.all(batch);
        projects.push(...results);
    }

    return projects;
};