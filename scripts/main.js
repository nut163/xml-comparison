document.addEventListener('DOMContentLoaded', function() {
    const xmlFile1 = document.getElementById('xmlFile1');
    const xmlFile2 = document.getElementById('xmlFile2');
    const compareButton = document.getElementById('compareButton');
    const result = document.getElementById('result');

    compareButton.addEventListener('click', function() {
        const reader1 = new FileReader();
        const reader2 = new FileReader();

        reader1.onload = function() {
            const parsedXML1 = parseXML(reader1.result);
            reader2.onload = function() {
                const parsedXML2 = parseXML(reader2.result);
                const difference = compareXML(parsedXML1, parsedXML2);
                displayResult(difference);
            };
            reader2.readAsText(xmlFile2.files[0]);
        };
        reader1.readAsText(xmlFile1.files[0]);
    });
});

function displayResult(difference) {
    result.textContent = JSON.stringify(difference, null, 2);
}