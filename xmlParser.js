function parseXML(input) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(input,"text/xml");
    return xmlDoc;
}