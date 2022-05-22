import {database} from '../../services/mySql/app';
const COLLECTION = 'monitorias'
//import {MonitoriasServices} from './services'
module.exports.MonitoriasController = {
    getAll: (req, res) => {
        try {
            const conecction = database();
            conecction.query(
                `SELECT * FROM ${COLLECTION}`,
                function (err, results, fields) {
                    res.send({
                        mensaje: "Consulta terminada satisfactoriamente",
                        body: results
                    })
                }
            );
        } catch (error) {
            console.log(error)
            res.send(error)
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
                    results.length !== 0 ? res.send({
                        mensaje: "Consulta terminada satisfactoriamente", body: results
                    }) : res.send({
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
                    res.send({ mensaje: 'No se puede guardar valores nulos' })
                }
            }
            const conecction = database();
            conecction.query(
                `INSERT INTO ${COLLECTION} (id_monitor, materia, fecha, salon) VALUES (${body.id_monitor}, "${body.materia}", "${body.fecha}", "${body.salon}")`,
                function (err, results) {
                    if (err) {
                        //Error en el ingreso de datos en la tabla
                        res.send({ mensaje: err.sqlMessage })
                    } {
                        console.log("1 record inserted");
                        res.send({ mensaje: "Succesful" })
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
                    res.send({ mensaje: 'No se puedo actualizar valores nulos' })
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
                        res.send({ mensaje: err.sqlMessage })
                    } else {
                        res.send({ message: 'Fue actualizado con exito' })

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
                        res.send({ mensaje: err.sqlMessage })
                    } {
                        if (results.affectedRows > 0) {
                            console.log("1 Eliminado");
                            res.send({ mensaje: "Succesful" })
                        } else {
                            res.send({ mensaje: "No se elimino nada" })
                        }

                    }

                }
            );
        } catch (error) {

        }

    },
};