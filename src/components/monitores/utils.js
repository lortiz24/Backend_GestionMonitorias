
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
        nombre: params.nombre.split('$$').join(' '),
        apellidos: params.apellidos.split('$$').join(' '),
        programAcademica: params.programAcademica.split('$$').join(' '),
        semestre: params.semestre.split('$$').join(' '),
        cedula: params.cedula.split('$$').join(' '),
        telefono: params.telefono.split('$$').join(' '),
        email: params.email.split('$$').join(' '),
    }


}

module.exports.MonitoresUtils = {
    parseDato,
    bodyNulo
}