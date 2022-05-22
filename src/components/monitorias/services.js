const database = require('../../services/mySql/app');
const COLLECTION = 'monitorias'

const getAll = () => {
    const conecction = database();
    conecction.query(
        `SELECT * FROM ${COLLECTION}`,
        function (err, results, fields) {
            return results;
        }
    );
};

export default MonitoriasServices={
    getAll,
}