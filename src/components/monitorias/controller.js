const database = require('../../services/mySql/app');
const COLLECTION = 'monitorias'

module.exports.MonitoriasController = {
    getAll: (req, res) => {
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
                    if(err)throw err
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
    getById: (req, res) => {
        try {
            const { params: { id } } = req;
            console.log(id)
            const conecction = database();
            conecction.query(
                `SELECT * FROM ${COLLECTION} WHERE idMonitorias =?`, id,
                function (err, results, fields) {
                    if (err) throw err
                    results.length !== 0 ? res.json({
                        mensaje: "Consulta terminada satisfactoriamente", body: results
                    }) : res.json({
                        mensaje: `No se encontraron resultados con id=${id}`, body: results
                    })

                }
            );
        } catch (error) {
            console.log(error)
        }

    },
    create: (req, res) => {
        try {
            const { body } = req
            for (const property in body) {
                if (body[property] === null || body[property] === undefined || body[property].length === 0) {
                    res.json({ mensaje: 'No se puede guardar valores nulos' })
                }
            }
            const conecction = database();
            conecction.query(
                `INSERT INTO ${COLLECTION} (id_monitor, materia, fecha, salon) VALUES (${body.id_monitor}, "${body.materia}", "${body.fecha}", "${body.salon}")`,
                function (err, results) {
                    if (err) {
                        //Error en el ingreso de datos en la tabla
                        res.json({ mensaje: err.sqlMessage })
                    } {
                        console.log("1 record inserted");
                        res.json({ mensaje: "Succesful" })
                    }

                }
            );
        } catch (error) {
            console.log(error)
        }
    },
    update: (req, res) => {
        try {
            const { body } = req
            const { params: { id } } = req;
            for (const property in body) {
                if (body[property] === null || body[property] === undefined || body[property].length === 0) {
                    res.json({ mensaje: 'No se puedo actualizar valores nulos' })
                    return
                }
            }
            let send = [
                body,
                id
            ]
            let query = `UPDATE ${COLLECTION} SET ? WHERE idMonitorias = ?`;
            const conecction = database();
            conecction.query(query, send,
                function (err, results) {
                    if (err) {
                        //Error en el ingreso de datos en la tabla
                        res.json({ mensaje: err.sqlMessage })
                    } else {
                        res.json({ message: 'Fue actualizado con exito' })

                    }

                }
            );

        } catch (error) {

        }
    },

    delete: (req, res) => {
        try {

            const { params: { id } } = req;
            let query = `DELETE FROM ${COLLECTION} WHERE idMonitorias = ${id}`;

            const conecction = database();
            conecction.query(query,
                function (err, results) {
                    if (err) {
                        //Error en el ingreso de datos en la tabla
                        res.json({ mensaje: err.sqlMessage })
                    } {
                        if (results.affectedRows > 0) {
                            console.log("1 Eliminado");
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