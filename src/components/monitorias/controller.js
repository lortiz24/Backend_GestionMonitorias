

module.exports.MonitoriasController = {
    getAll: async (req, res) => {
        try {
            res.send('Estas obteniendo todas los monitorias')
        } catch (error) {

        }
    },
    getById: async (req, res) => {
        try {
            res.send('Estas obteniendo una monitoria')

        } catch (error) {

        }

    },
    create: async (req, res) => {
        try {
            res.send('Estas creando una monitoria')
        } catch (error) {

        }
    },
    update: async (req, res) => {
        try {
            res.send('Estas actualizando una monitoria')
        } catch (error) {

        }
    },

    delete: async (req, res) => {
        try {
            res.send('Estas borrando una monitoria')
        } catch (error) {

        }

    },
};