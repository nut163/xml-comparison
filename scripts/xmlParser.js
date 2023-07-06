function parseXML(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function(event) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(event.target.result, "text/xml");
            resolve(xmlDoc);
        };
        reader.onerror = function() {
            reject(new Error("Error reading file"));
        };
        reader.readAsText(file);
    });
}

export { parseXML };