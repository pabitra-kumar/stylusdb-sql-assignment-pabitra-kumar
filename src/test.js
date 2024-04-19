const readCSV = require('./csvReader');
const parseQuery = require('./queryParser');
const executeSELECTQuery = require('./index');

const query = 'SELECT id, name FROM sample';
const result = async () => { return await executeSELECTQuery(query); };

result().then((res) => {
    console.log(res);
});