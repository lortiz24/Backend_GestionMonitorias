const {Router}=require('express');
const router=Router()
const monitoriasRouter =require('../components/monitorias/routes')
const monitoresRouter =require('../components/monitores/routes')


/* import express from 'express';
const router=express.Router()
import router from '../components/monitores/routes'
import monitoriasRouter from'../components/monitorias/routes' */

module.exports.Routers = (app)=>{
    app.use('/monitores',monitoresRouter)
    app.use('/monitorias',monitoriasRouter)
}