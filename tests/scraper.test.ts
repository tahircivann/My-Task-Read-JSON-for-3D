import axios from 'axios';
import { scrapeProjects, fetchProjectJson, getProjectData } from '../src/scraper';
import { projectLinks } from '../src/links';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockProjectJson = {
    items: [
        {
            name: 'Sample Project',
            data: {
                items: [
                    {
                        className: 'Floor',
                        items: [
                            {
                                className: 'Room',
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

describe('Scraper Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetchProjectJson should fetch project JSON data', async () => {
        const hashKey = 'sampleHashKey';
        mockedAxios.get.mockResolvedValue({ data: mockProjectJson });

        const data = await fetchProjectJson(hashKey);
        expect(data).toEqual(mockProjectJson);
        expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining(hashKey));
    });

    it('getProjectData should fetch and process project data correctly', async () => {
        const link = 'https://planner5d.com?key=sampleHashKey';
        mockedAxios.get.mockResolvedValue({ data: mockProjectJson });

        const projectData = await getProjectData(link);
        expect(projectData).toEqual({
            hash: 'sampleHashKey',
            title: 'Sample Project',
            totalRooms: 1,
            totalFloors: 1,
        });
    });

    it('scrapeProjects should fetch and process multiple projects', async () => {
        mockedAxios.get.mockResolvedValue({ data: mockProjectJson });
        (projectLinks as unknown) = ['https://planner5d.com?key=sampleHashKey'];

        const projects = await scrapeProjects();
        expect(projects.length).toBe(1);
        expect(projects[0]).toEqual({
            hash: 'sampleHashKey',
            title: 'Sample Project',
            totalRooms: 1,
            totalFloors: 1,
        });
    });
});