1. Exported Variables:
   - `parsedXML1` and `parsedXML2`: These variables will hold the parsed XML data from the two files to be compared.
   - `difference`: This variable will hold the result of the comparison between the two XML files.

2. Data Schemas:
   - `XMLData`: This schema will define the structure of the parsed XML data.

3. ID Names of DOM Elements:
   - `xmlFile1` and `xmlFile2`: These are the IDs of the input fields where the user will upload the XML files.
   - `compareButton`: This is the ID of the button that the user will click to start the comparison.
   - `result`: This is the ID of the area where the comparison result will be displayed.

4. Message Names:
   - `compareXML`: This message will be emitted when the user clicks the compare button, triggering the comparison process.
   - `displayResult`: This message will be emitted when the comparison is done, triggering the display of the result.

5. Function Names:
   - `parseXML(file)`: This function will parse an XML file and return the parsed data.
   - `compareXML(xml1, xml2)`: This function will compare two parsed XML data and return the differences.
   - `displayResult(difference)`: This function will display the differences in the browser.