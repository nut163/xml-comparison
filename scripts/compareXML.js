function compareXML(xml1, xml2) {
    let difference = {};
    let keys1 = Object.keys(xml1);
    let keys2 = Object.keys(xml2);

    keys1.forEach(key => {
        if (!xml2.hasOwnProperty(key)) {
            difference[key] = { 'inFile1': xml1[key], 'inFile2': null };
        } else if (xml1[key] !== xml2[key]) {
            difference[key] = { 'inFile1': xml1[key], 'inFile2': xml2[key] };
        }
    });

    keys2.forEach(key => {
        if (!xml1.hasOwnProperty(key)) {
            difference[key] = { 'inFile1': null, 'inFile2': xml2[key] };
        }
    });

    return difference;
}

export { compareXML };