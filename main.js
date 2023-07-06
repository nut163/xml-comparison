// Import parseXML function from xmlParser.js
import { parseXML } from './xmlParser.js';

let xml1, xml2;

// Get DOM elements
const file1 = document.getElementById('file1');
const file2 = document.getElementById('file2');
const result = document.getElementById('result');

// Create FileReader instances
const reader1 = new FileReader();
const reader2 = new FileReader();

// Define onload functions
reader1.onload = function(event) {
    xml1 = parseXML(event.target.result);
    compareXML();
};

reader2.onload = function(event) {
    xml2 = parseXML(event.target.result);
    compareXML();
};

// Add event listeners to file inputs
file1.addEventListener('change', function(event) {
    reader1.readAsText(event.target.files[0]);
});

file2.addEventListener('change', function(event) {
    reader2.readAsText(event.target.files[0]);
});

// Compare XML function
function compareXML() {
    if (xml1 && xml2) {
        // Comparison logic here
        // Update result element with comparison result
        result.textContent = JSON.stringify(xml1) === JSON.stringify(xml2) ? 'XML files are identical' : 'XML files are different';
    }
}