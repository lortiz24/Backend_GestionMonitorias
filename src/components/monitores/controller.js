const database = require('../../services/mySql/app');
const COLLECTION = 'monitores'
const fs = require('fs');
const path = require('path');
const {MonitoresUtils}=require('./utils')
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
    /* create: async (req, res) => {
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
            for (const property in body) {
                if (body[property] === null || body[property] === undefined || body[property].length === 0) {
                    res.json({ mensaje: 'No se puedo actualizar valores nulos' })
                    return
                }
            }
            
            console.log(body)
            conecction.query(`INSERT INTO ${COLLECTION} set ?`, [body], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error' });

                console.log(rows)
                res.json({ message: 'Image saved', idMonitores: rows.insertId })
            })
        } catch (error) {
            console.log(error)
        }
    }, */

    updateFoto: async (req, res) => {
        try {
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }
            });
            
            const { params: { id } } = req;
            //Lectura de la imagen guardada en assets
            const foto = fs.readFileSync(path.join(__dirname, '../../assets/') + req.file.filename);
            conecction.query(`UPDATE ${COLLECTION} set ? WHERE idMonitores = ${id}`, [{ foto: foto }], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error' });
                if (rows.affectedRows===0) return res.json({ message: 'No se pudo actualizar la foto' });
                res.json({ message: 'Image saved' })
            });
        } catch (error) {
            res.json({message: 'Internal server error: '})
            console.log(error)
        }
    }, 

    create: async (req, res) => {
        try {
            console.log('Guardando')
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }
            });
            if(!MonitoresUtils.bodyNulo(req, res)) return
            const {params}=req;
            
            const response=MonitoresUtils.parseDato(params)
               //Lectura de la imagen guardada en assets
            const foto = fs.readFileSync(path.join(__dirname, '../../assets/') + req.file.filename);
            const body={...response,foto}
            console.log(body)
            
            
            /conecction.query(`INSERT INTO ${COLLECTION} set ?`, [body], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error', message: err.message });
                res.json({ message: 'Succesful' })
            });  
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {
            const conecction = database();
            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }
            });

            //verificar si el cuerpo tiene valores nulos
            if(!MonitoresUtils.bodyNulo(req, res))return

            const { params: { id } } = req;
            const {body} = req
            
            conecction.query(`UPDATE ${COLLECTION} set ? WHERE idMonitores = ${id}`, [body], (err, rows) => {
                if (err) return res.status(500).json({ message: 'Server error'});
                if (rows.affectedRows===0) return res.json({ message: 'No se actualizo nada'});
                
                res.json({ message: 'Actualizacion exitosa' })
                
            });
        } catch (error) {
            console.log(error)
        }
    },

    delete: async (req, res) => {
        try {

            const { params: { id } } = req;


            const conecction = database();

            conecction.connect(err => {
                if (err) {
                    throw err
                } else {
                    console.log('Connected to database')
                }
            });
            let query = `DELETE FROM ${COLLECTION} WHERE idMonitores = ${id}`;
            conecction.query(query,
                function (err, results) {
                    if (err) {
                        //Error en el ingreso de datos en la tabla
                        res.json({ mensaje: 'Error interno del servidor' })
                    } else {
                        if (results.affectedRows > 0) {

                            res.json({ mensaje: "Succesful" })
                        } else {
                            res.json({ mensaje: "No se elimino nada" })
                        }

                    }

                }
            );
        } catch (error) {

        }

    },
};