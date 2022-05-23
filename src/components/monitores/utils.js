
const bodyNulo = (req, res) => {
    const {body} = req;
    for (const property in body) {
        if (body[property] === null || body[property] === undefined || body[property].length === 0) {
            res.json({ mensaje: 'No se puedo actualizar valores nulos' })
            return false
        }
    }
    return true
}

const parseDato = (params) => {
    return {
        nombre: params.nombre.replace('$$', ' '),
        apellidos: params.apellidos.replace('$$', ' '),
        programAcademica: params.programAcademica.replace('$$', ' '),
        semestre: params.semestre.replace('$$', ' '),
        cedula: params.cedula.replace('$$', ' '),
        telefono: params.telefono.replace('$$', ' '),
        email: params.email.replace('$$', ' '),
    }


}

module.exports.MonitoresUtils = {
    parseDato,
    bodyNulo
}