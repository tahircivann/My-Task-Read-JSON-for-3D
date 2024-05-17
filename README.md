# My-Task-Read-JSON-for-3D


A web application project that includes a project gallery and a 3D view using Three.js.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project is a web application built with TypeScript, Webpack, and Three.js. It features a project gallery that scrapes project data and a custom 3D view to visualize project details.

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/tahircivann/My-Task-Read-JSON-for-3D.git
   ```
   ![Scraper](https://github.com/tahircivann/My-Task-Read-JSON-for-3D/assets/69795597/f6d36624-be63-443e-9d5b-171f46284722)
2. Navigate to the project directory:
   ```sh
   cd My-Task-Read-JSON-for-3D
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
## Usage
To build the project, run:
   ```sh
   npm run build
   ```
### Running the Development Server
To start the Webpack development server, run:
   ```sh
   npm run start
   ```
### Running the Express Server
To start the Express server, run in another terminal:
   ```sh
  npm run proxy
   ```
### Running Both Servers Concurrently
To run both the Webpack development server and the Express server concurrently, run:
   ```sh
  npm run dev
   ```
### Running Tests
To run the tests, use:
   ```sh
  npm run test
   ```

Accessing the Application
```sh
  Navigate to http://localhost:8081/index.html to view the project gallery.
  Navigate to http://localhost:8081/view.html?hash=your-hash&title=your-title&rooms=number-of-rooms&floors=number-of-floors to view the 3D project view.
```
Available Scripts
```sh
  npm run start: Starts the Webpack development server.
  npm run build: Builds the project for production.
  npm run test: Runs the tests using Jest.
  npm run server: Serves the project using http-server.
  npm run proxy: Starts the Express server to serve static files and handle proxy requests.
  npm run dev: Runs both the Webpack development server and the Express server concurrently.
```

## Folder Structure
```sh
MY-TASK/
├── dist/
│   ├── index.bundle.js
│   ├── view.bundle.js
│   └── view.bundle.js.LICENSE.txt
├── node_modules/
├── src/
│   ├── styles/
│   ├── index.ts
│   ├── links.ts
│   ├── scraper.ts
│   ├── styles.css
│   ├── types.ts
│   └── view.ts
├── tests/
│   ├── scraper.test.ts
├── index.html
├── jest.config.js
├── package-lock.json
├── package.json
├── server.js
├── tsconfig.json
├── view.html
└── webpack.config.ts
```
