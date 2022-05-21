const {Router}=require('express');
const router=Router()
const monitoriasRouter =require('../components/monitorias/routes')
const monitoresRouter =require('../components/monitores/routes')


module.exports.Routers = (app)=>{
    app.use('/monitores',monitoresRouter)
    app.use('/monitorias',monitoriasRouter)
}