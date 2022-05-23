const database = require('../../services/mySql/app');
const COLLECTION = 'monitores'
const fs = require('fs');
const path = require('path');
module.exports.MonitoresController = {
    getAll: async (req, res) => {
        try {
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
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
            try {
                const { params: { id } } = req;

                const conecction = database();
                conecction.query(
                    `SELECT * FROM ${COLLECTION} WHERE idMonitores =?`, id,
                    function (err, results, fields) {
                        if (err) throw err
                        res.json({
                            mensaje: "Consulta terminada satisfactoriamente",
                            body: results
                        })


                    }
                );
            } catch (error) {
                console.log(error)
            }

        } catch (error) {

        }

    },
    create: async (req, res) => {
        try {
            console.log('first')

            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }

            });


            const { body } = req
            console.log(body)
            conecction.query(`INSERT INTO ${COLLECTION} set ?`, [body], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error' });

                console.log(rows)
                res.json({ message: 'Image saved', idMonitores: rows.insertId })
            })
        } catch (error) {
            console.log(error)
        }
    },
    savedImage: async (req, res) => {
        try {
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }
            });

            const { params:{id} } = req;
            const foto = fs.readFileSync(path.join(__dirname, '../../assets/')+req.file.filename);
            conecction.query(`UPDATE ${COLLECTION} set ? WHERE idMonitores = ${id}`, [{foto}], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error' ,message:err.message});
                res.json({ message: 'Image saved'})
            }); 
        } catch (error) {
            console.log(error)
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