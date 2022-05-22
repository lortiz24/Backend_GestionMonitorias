const database = require('../../services/mySql/app');
const COLLECTION = 'monitores'

module.exports.MonitoresController = {
    getAll: async (req, res) => {
        try {
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                }else{
                    console.log('Connected to database')
                }
            });
            conecction.query(
                `SELECT * FROM ${COLLECTION}`,
                function (err, results, fields) {
                    res.json({
                        mensaje: "Consulta terminada satisfactoriamente", body: results
                    })
                }
            );
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    },
    getById: async (req, res) => {
        try {
            res.send('Estas obteniendo un monitor')

        } catch (error) {

        }

    },
    create: async (req, res) => {
        try {
            res.send('Estas creando un monitor')
        } catch (error) {

        }
    },
    update: async (req, res) => {
        try {
            res.send('Estas actualizando un monitor')
        } catch (error) {

        }
    },

    delete: async (req, res) => {
        try {
            res.send('Estas borrando un monitor')
        } catch (error) {

        }

    },
};