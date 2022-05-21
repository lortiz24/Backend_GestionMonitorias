

module.exports.MonitoresController = {
    getAll: async (req, res) => {
        try {
            res.send('Estas obteniendo todos los monitores')
        } catch (error) {

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