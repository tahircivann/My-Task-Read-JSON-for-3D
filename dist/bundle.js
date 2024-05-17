/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


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
        if (alreadyAdded.has(project.hash))
            return; // Prevent duplicate entries
        alreadyAdded.add(project.hash);
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
        const response = yield fetch('projects.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`);
        }
        const projects = yield response.json();
        let concurrentFetches = [];
        projects.forEach((project, index) => {
            concurrentFetches.push(fetchProjectDetails(project));
            if (concurrentFetches.length === 3 || index === projects.length - 1) {
                Promise.all(concurrentFetches).then(fetchedProjects => {
                    fetchedProjects.forEach(appendProjectToDOM);
                }).catch(error => console.error("Error processing projects:", error));
                concurrentFetches = [];
            }
        });
    });
    try {
        loadProjects();
    }
    catch (error) {
        console.error("Error during DOM initialization:", error);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFDO0lBRUYsSUFBSSxDQUFDO1FBQ0QsWUFBWSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUVsRUg7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzVkLWludGVydmlldy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly81ZC1pbnRlcnZpZXcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly81ZC1pbnRlcnZpZXcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLzVkLWludGVydmlldy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb2plY3Qge1xyXG4gICAgaGFzaDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgdG90YWxSb29tczogbnVtYmVyO1xyXG4gICAgdG90YWxGbG9vcnM6IG51bWJlcjtcclxufVxyXG5jb25zdCBhbHJlYWR5QWRkZWQgPSBuZXcgU2V0KCk7XHJcbmNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBpbmRleC50c1wiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XHJcbiAgICBpZiAoIXByb2plY3RzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRhaW5lciBmb3IgcHJvamVjdHMgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgYXBwZW5kUHJvamVjdFRvRE9NID0gKHByb2plY3Q6IFByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAoYWxyZWFkeUFkZGVkLmhhcyhwcm9qZWN0Lmhhc2gpKSByZXR1cm47IC8vIFByZXZlbnQgZHVwbGljYXRlIGVudHJpZXNcclxuICAgICAgICBhbHJlYWR5QWRkZWQuYWRkKHByb2plY3QuaGFzaCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGgyPiR7cHJvamVjdC50aXRsZX08L2gyPjxwPlRvdGFsIFJvb21zOiAke3Byb2plY3QudG90YWxSb29tc308L3A+PHA+VG90YWwgRmxvb3JzOiAke3Byb2plY3QudG90YWxGbG9vcnN9PC9wPmA7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFByb2plY3REZXRhaWxzID0gYXN5bmMgKHByb2plY3Q6IFByb2plY3QpOiBQcm9taXNlPFByb2plY3Q+ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUocHJvamVjdCksIE1hdGgucmFuZG9tKCkgKiAxMDAwKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwcm9qZWN0c0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIHByb2plY3RzLi4uXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdHMgYXJlIGFscmVhZHkgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0c0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBwcm9qZWN0cy4uLlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgncHJvamVjdHMuanNvbicpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBsZXQgY29uY3VycmVudEZldGNoZXM6IFByb21pc2U8UHJvamVjdD5bXSA9IFtdO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbmN1cnJlbnRGZXRjaGVzLnB1c2goZmV0Y2hQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIGlmIChjb25jdXJyZW50RmV0Y2hlcy5sZW5ndGggPT09IDMgfHwgaW5kZXggPT09IHByb2plY3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNvbmN1cnJlbnRGZXRjaGVzKS50aGVuKGZldGNoZWRQcm9qZWN0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFByb2plY3RzLmZvckVhY2goYXBwZW5kUHJvamVjdFRvRE9NKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIHByb2plY3RzOlwiLCBlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgY29uY3VycmVudEZldGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIERPTSBpbml0aWFsaXphdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG59KTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=