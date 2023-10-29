var express = require('express');
var router = express.Router();
var usuariosModel=require('../../models/usuariosModel');

/* GET Login page */
router.get('/', function(req, res, next) {
    res.render('admin/login',{
    layout:'admin/layout'  
  });
});
router.post('/',async(req,res,next)=>{
    try{
        var usuario=req.body.usuario;
        var password=req.body.password;
        console.log("ingresaste:",usuario,password);

        var data=await usuariosModel.getUserByNameAndPassword(usuario,password);
        if(data!=undefined){

            req.session.id_usuario=data.id;
            req.session.nombre=data.usuario;
            res.redirect('/admin/novedades');
            console.log("id: ",req.session.id_usuario);
        }
        else{
            res.render('admin/login',{
                layout:'admin/layout',
                error:true
            });
        }
    }
    catch(error){
        console.log("error en login", error);
    }
});
// LOGOUT
router.get('/logout',function(req,res,next){
    req.session.destroy();
    res.render('admin/login',{
        layout: 'admin/layout'
    })
})

module.exports = router;