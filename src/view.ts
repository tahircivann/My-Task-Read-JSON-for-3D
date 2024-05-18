import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Function to get query parameters
const getQueryParams = () => {
    const params: { [key: string]: string } = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split('&');
    queries.forEach(query => {
        const [key, value] = query.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
};

const { hash, title, rooms, floors } = getQueryParams();

const projectDetails = document.getElementById('project-details');
if (projectDetails) {
    projectDetails.innerHTML = `
        <h2>${title}</h2>
        <p>Hash: ${hash}</p>
        <p>Total Rooms: ${rooms}</p>
        <p>Total Floors: ${floors}</p>
    `;
}

const renderCubes = (rooms: number, floors: number) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const roomGeometry = new THREE.BoxGeometry(1, 1, 1);
    const roomMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    for (let i = 0; i < rooms; i++) {
        const roomCube = new THREE.Mesh(roomGeometry, roomMaterial);
        roomCube.position.x = i * 1.5;
        scene.add(roomCube);
    }

    const floorGeometry = new THREE.BoxGeometry(2, 0.1, 2);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    for (let i = 0; i < floors; i++) {
        const floorCube = new THREE.Mesh(floorGeometry, floorMaterial);
        floorCube.position.y = i * 1.5;
        scene.add(floorCube);
    }

    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
};

renderCubes(parseInt(rooms), parseInt(floors));