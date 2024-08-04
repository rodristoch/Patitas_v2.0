const { log } = require("console");
const fs = require("fs");
const path = require("path")
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

//base de datos de productos
/* const productsFilePath = path.join(__dirname, "../data/productosDataBase.json"); */
/* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


const productController = {

    productos : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productosPerro = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            },
            limit: 4
        })

        let productosGato = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
            },
            limit: 4
        })

        Promise.all([productosPerro, productosGato])

        .then(([productosPerro, productosGato]) => {
            res.render('productos.ejs', {productosPerro, productosGato, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    comida : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let comida = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let comidaMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let comidaMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let checkbox20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1  /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }]
        })

        let gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        let de0a10Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXgato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXperro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let gatoOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perroOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        Promise.all([comida, comidaMenorPrecio, comidaMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff])

        .then(([comida, comidaMenorPrecio, comidaMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff]) => {
            res.render('categoriaComida.ejs', {comida, comidaMenorPrecio, comidaMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });

    },

    accesorios : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let accesorios = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let accesoriosMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let accesoriosMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let checkbox20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }]
        })

        let gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        let de0a10Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXgato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXperro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let gatoOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perroOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        Promise.all([accesorios, accesoriosMenorPrecio, accesoriosMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff])

        .then(([accesorios, accesoriosMenorPrecio, accesoriosMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff]) => {
            res.render('categoriaAccesorios.ejs', {accesorios, accesoriosMenorPrecio, accesoriosMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });

    },

    higiene : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let higiene = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let higieneMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let higieneMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let checkbox20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }]
        })

        let gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        let de0a10Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXgato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXperro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let gatoOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perroOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        Promise.all([higiene, higieneMenorPrecio, higieneMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff])

        .then(([higiene, higieneMenorPrecio, higieneMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff]) => {
            res.render('categoriaHigiene.ejs', {higiene, higieneMenorPrecio, higieneMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });

    },

    juguetes : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let juguetes = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let juguetesMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let juguetesMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let checkbox20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }]
        })

        let gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        let de0a10Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30Off = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXgato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de0a10perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de10a20perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de20a30perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let de30aXperro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            }/* ,
            order: [['precio', 'asc']], */
        })

        let gatoOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let perroOff = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        Promise.all([juguetes, juguetesMenorPrecio, juguetesMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff])

        .then(([juguetes, juguetesMenorPrecio, juguetesMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff]) => {
            res.render('categoriaJuguetes.ejs', {juguetes, juguetesMenorPrecio, juguetesMayorPrecio, de0a10, de10a20, de20a30, de30aX, checkbox20Off, gato, perro, de0a10Off, de10a20Off, de20a30Off, de30aXOff, de0a10gato, de10a20gato, de20a30gato, de30aXgato, de0a10perro, de10a20perro, de20a30perro, de30aXperro, gatoOff, perroOff, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });

    },

    categoriaPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let perro = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            }
        })

        let perroMenorPrecio = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let perroMayorPrecio = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ categorias ------------------- */

        let checkboxComidaPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxAccesorioPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxHigienePerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxJuguetePerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxComidaPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxAccesorioPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxHigienePerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxJuguetePerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkboxComidaPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let checkboxAccesorioPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let checkboxHigienePerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let checkboxJuguetePerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ precios ------------------- */

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let de0a10MePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let de10a20MePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let de20a30MePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let de30aXMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let de0a10MaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let de10a20MaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let de20a30MaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let de30aXMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ marcas ------------------- */

        let checkboxEukanuba = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 12
            },
            order: [['precio', 'asc']]
        })

        let checkboxRoyal = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 11
            },
            order: [['precio', 'asc']]
        })

        let checkboxProPlanPerro = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 5
            },
            order: [['precio', 'asc']]
        })

        let checkboxOtrasMarcasPerro = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: {[Op.not]: [12, 11, 5]}
            },
            order: [['precio', 'asc']]
        })

        let checkboxEukanubaMePre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 12
            },
            order: [['precio', 'asc']]
        })

        let checkboxRoyalMePre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 11
            },
            order: [['precio', 'asc']]
        })

        let checkboxProPlanPerroMePre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 5
            },
            order: [['precio', 'asc']]
        })

        let checkboxOtrasMarcasPerroMePre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: {[Op.not]: [12, 11, 5]}
            },
            order: [['precio', 'asc']]
        })

        let checkboxEukanubaMaPre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 12
            },
            order: [['precio', 'desc']]
        })

        let checkboxRoyalMaPre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 11
            },
            order: [['precio', 'desc']]
        })

        let checkboxProPlanPerroMaPre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: 5
            },
            order: [['precio', 'desc']]
        })

        let checkboxOtrasMarcasPerroMaPre = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                marca_id: {[Op.not]: [12, 11, 5]}
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ productos 20% OFF ------------------- */

        let checkbox20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkbox20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let checkbox20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ categorias con 20% OFF ------------------- */

        let comida20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let accesorio20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let higiene20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let juguete20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let comida20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let accesorio20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let higiene20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let juguete20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']]
        })

        let comida20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let accesorio20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let higiene20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        let juguete20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let de0a10OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let de10a20OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let de20a30OffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let de30aXOffPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let de0a10OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let de10a20OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let de20a30OffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let de30aXOffPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ categorias por precio ------------------- */

        /* Accesorios */
        let accesorio0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let accesorio10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let accesorio0a10PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let accesorio10a20PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let accesorio20a30PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let accesorio30aXPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let accesorio0a10PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let accesorio10a20PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let accesorio20a30PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let accesorio30aXPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* Comida */
        let comida0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let comida10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let comida0a10PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let comida10a20PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let comida20a30PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let comida30aXPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let comida0a10PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let comida10a20PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let comida20a30PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let comida30aXPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* Higiene */
        let higiene0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let higiene10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let higiene0a10PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let higiene10a20PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let higiene20a30PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let higiene30aXPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let higiene0a10PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let higiene10a20PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let higiene20a30PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let higiene30aXPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* Juguetes */
        let juguete0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let juguete10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let juguete0a10PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let juguete10a20PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let juguete20a30PerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']]
        })

        let juguete30aXPerroMePre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']]
        })

        let juguete0a10PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'desc']]
        })

        let juguete10a20PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let juguete20a30PerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'desc']]
        })

        let juguete30aXPerroMaPre = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ categorias con 20% OFF y por precio ------------------- */

        /* Accesorios */
        let accesorio0a10Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio10a20Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio20a30Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio30aXCon20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Comida */
        let comida0a10Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida10a20Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida20a30Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida30aXCon20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Higiene */
        let higiene0a10Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene10a20Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene20a30Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene30aXCon20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Juguetes */
        let juguete0a10Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete10a20Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete20a30Con20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete30aXCon20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([perro, perroMenorPrecio, perroMayorPrecio, checkboxAccesorioPerro, checkboxAccesorioPerroMePre, checkboxAccesorioPerroMaPre, checkboxComidaPerro, checkboxComidaPerroMePre, checkboxComidaPerroMaPre, checkboxHigienePerro, checkboxHigienePerroMePre, checkboxHigienePerroMaPre, checkboxJuguetePerro, checkboxJuguetePerroMePre, checkboxJuguetePerroMaPre, de0a10, de10a20, de20a30, de30aX, de0a10MePre, de10a20MePre, de20a30MePre, de30aXMePre, de0a10MaPre, de10a20MaPre, de20a30MaPre, de30aXMaPre, checkboxEukanuba, checkboxEukanubaMePre, checkboxEukanubaMaPre, checkboxRoyal, checkboxRoyalMePre, checkboxRoyalMaPre, checkboxProPlanPerro, checkboxProPlanPerroMaPre, checkboxProPlanPerroMePre, checkboxOtrasMarcasPerro, checkboxOtrasMarcasPerroMaPre, checkboxOtrasMarcasPerroMePre, checkbox20OffPerro, checkbox20OffPerroMaPre, checkbox20OffPerroMePre, comida20OffPerro, comida20OffPerroMePre, comida20OffPerroMaPre, accesorio20OffPerro, accesorio20OffPerroMePre, accesorio20OffPerroMaPre, higiene20OffPerro, higiene20OffPerroMePre, higiene20OffPerroMaPre, juguete20OffPerro, juguete20OffPerroMePre, juguete20OffPerroMaPre, de0a10OffPerro, de0a10OffPerroMePre, de0a10OffPerroMaPre, de10a20OffPerro, de10a20OffPerroMePre, de10a20OffPerroMaPre, de20a30OffPerro, de20a30OffPerroMePre, de20a30OffPerroMaPre, de30aXOffPerro, de30aXOffPerroMePre, de30aXOffPerroMaPre, accesorio0a10Perro, accesorio0a10PerroMePre, accesorio0a10PerroMaPre, accesorio10a20Perro, accesorio10a20PerroMePre, accesorio10a20PerroMaPre, accesorio20a30Perro, accesorio20a30PerroMePre, accesorio20a30PerroMaPre, accesorio30aXPerro, accesorio30aXPerroMePre, accesorio30aXPerroMaPre, comida0a10Perro, comida0a10PerroMePre, comida0a10PerroMaPre, comida10a20Perro, comida10a20PerroMePre, comida10a20PerroMaPre, comida20a30Perro, comida20a30PerroMePre, comida20a30PerroMaPre, comida30aXPerro, comida30aXPerroMePre, comida30aXPerroMaPre, higiene0a10Perro, higiene0a10PerroMePre, higiene0a10PerroMaPre, higiene10a20Perro, higiene10a20PerroMePre, higiene10a20PerroMaPre, higiene20a30Perro, higiene20a30PerroMePre, higiene20a30PerroMaPre, higiene30aXPerro, higiene30aXPerroMePre, higiene30aXPerroMaPre, juguete0a10Perro, juguete0a10PerroMePre, juguete0a10PerroMaPre, juguete10a20Perro, juguete10a20PerroMePre, juguete10a20PerroMaPre, juguete20a30Perro, juguete20a30PerroMePre, juguete20a30PerroMaPre, juguete30aXPerro, juguete30aXPerroMePre, juguete30aXPerroMaPre])

        .then(([perro, perroMenorPrecio, perroMayorPrecio, checkboxAccesorioPerro, checkboxAccesorioPerroMePre, checkboxAccesorioPerroMaPre, checkboxComidaPerro, checkboxComidaPerroMePre, checkboxComidaPerroMaPre, checkboxHigienePerro, checkboxHigienePerroMePre, checkboxHigienePerroMaPre, checkboxJuguetePerro, checkboxJuguetePerroMePre, checkboxJuguetePerroMaPre, de0a10, de10a20, de20a30, de30aX, de0a10MePre, de10a20MePre, de20a30MePre, de30aXMePre, de0a10MaPre, de10a20MaPre, de20a30MaPre, de30aXMaPre, checkboxEukanuba, checkboxEukanubaMePre, checkboxEukanubaMaPre, checkboxRoyal, checkboxRoyalMePre, checkboxRoyalMaPre, checkboxProPlanPerro, checkboxProPlanPerroMaPre, checkboxProPlanPerroMePre, checkboxOtrasMarcasPerro, checkboxOtrasMarcasPerroMaPre, checkboxOtrasMarcasPerroMePre, checkbox20OffPerro, checkbox20OffPerroMaPre, checkbox20OffPerroMePre, comida20OffPerro, comida20OffPerroMePre, comida20OffPerroMaPre, accesorio20OffPerro, accesorio20OffPerroMePre, accesorio20OffPerroMaPre, higiene20OffPerro, higiene20OffPerroMePre, higiene20OffPerroMaPre, juguete20OffPerro, juguete20OffPerroMePre, juguete20OffPerroMaPre, de0a10OffPerro, de0a10OffPerroMePre, de0a10OffPerroMaPre, de10a20OffPerro, de10a20OffPerroMePre, de10a20OffPerroMaPre, de20a30OffPerro, de20a30OffPerroMePre, de20a30OffPerroMaPre, de30aXOffPerro, de30aXOffPerroMePre, de30aXOffPerroMaPre, accesorio0a10Perro, accesorio0a10PerroMePre, accesorio0a10PerroMaPre, accesorio10a20Perro, accesorio10a20PerroMePre, accesorio10a20PerroMaPre, accesorio20a30Perro, accesorio20a30PerroMePre, accesorio20a30PerroMaPre, accesorio30aXPerro, accesorio30aXPerroMePre, accesorio30aXPerroMaPre, comida0a10Perro, comida0a10PerroMePre, comida0a10PerroMaPre, comida10a20Perro, comida10a20PerroMePre, comida10a20PerroMaPre, comida20a30Perro, comida20a30PerroMePre, comida20a30PerroMaPre, comida30aXPerro, comida30aXPerroMePre, comida30aXPerroMaPre, higiene0a10Perro, higiene0a10PerroMePre, higiene0a10PerroMaPre, higiene10a20Perro, higiene10a20PerroMePre, higiene10a20PerroMaPre, higiene20a30Perro, higiene20a30PerroMePre, higiene20a30PerroMaPre, higiene30aXPerro, higiene30aXPerroMePre, higiene30aXPerroMaPre, juguete0a10Perro, juguete0a10PerroMePre, juguete0a10PerroMaPre, juguete10a20Perro, juguete10a20PerroMePre, juguete10a20PerroMaPre, juguete20a30Perro, juguete20a30PerroMePre, juguete20a30PerroMaPre, juguete30aXPerro, juguete30aXPerroMePre, juguete30aXPerroMaPre]) => {
            res.render('perro.ejs', {perro, perroMenorPrecio, perroMayorPrecio, checkboxAccesorioPerro, checkboxAccesorioPerroMePre, checkboxAccesorioPerroMaPre, checkboxComidaPerro, checkboxComidaPerroMePre, checkboxComidaPerroMaPre, checkboxHigienePerro, checkboxHigienePerroMePre, checkboxHigienePerroMaPre, checkboxJuguetePerro, checkboxJuguetePerroMePre, checkboxJuguetePerroMaPre, de0a10, de10a20, de20a30, de30aX, de0a10MePre, de10a20MePre, de20a30MePre, de30aXMePre, de0a10MaPre, de10a20MaPre, de20a30MaPre, de30aXMaPre, checkboxEukanuba, checkboxEukanubaMePre, checkboxEukanubaMaPre, checkboxRoyal, checkboxRoyalMePre, checkboxRoyalMaPre, checkboxProPlanPerro, checkboxProPlanPerroMaPre, checkboxProPlanPerroMePre, checkboxOtrasMarcasPerro, checkboxOtrasMarcasPerroMaPre, checkboxOtrasMarcasPerroMePre, checkbox20OffPerro, checkbox20OffPerroMaPre, checkbox20OffPerroMePre, comida20OffPerro, comida20OffPerroMePre, comida20OffPerroMaPre, accesorio20OffPerro, accesorio20OffPerroMePre, accesorio20OffPerroMaPre, higiene20OffPerro, higiene20OffPerroMePre, higiene20OffPerroMaPre, juguete20OffPerro, juguete20OffPerroMePre, juguete20OffPerroMaPre, de0a10OffPerro, de0a10OffPerroMePre, de0a10OffPerroMaPre, de10a20OffPerro, de10a20OffPerroMePre, de10a20OffPerroMaPre, de20a30OffPerro, de20a30OffPerroMePre, de20a30OffPerroMaPre, de30aXOffPerro, de30aXOffPerroMePre, de30aXOffPerroMaPre, accesorio0a10Perro, accesorio0a10PerroMePre, accesorio0a10PerroMaPre, accesorio10a20Perro, accesorio10a20PerroMePre, accesorio10a20PerroMaPre, accesorio20a30Perro, accesorio20a30PerroMePre, accesorio20a30PerroMaPre, accesorio30aXPerro, accesorio30aXPerroMePre, accesorio30aXPerroMaPre, comida0a10Perro, comida0a10PerroMePre, comida0a10PerroMaPre, comida10a20Perro, comida10a20PerroMePre, comida10a20PerroMaPre, comida20a30Perro, comida20a30PerroMePre, comida20a30PerroMaPre, comida30aXPerro, comida30aXPerroMePre, comida30aXPerroMaPre, higiene0a10Perro, higiene0a10PerroMePre, higiene0a10PerroMaPre, higiene10a20Perro, higiene10a20PerroMePre, higiene10a20PerroMaPre, higiene20a30Perro, higiene20a30PerroMePre, higiene20a30PerroMaPre, higiene30aXPerro, higiene30aXPerroMePre, higiene30aXPerroMaPre, juguete0a10Perro, juguete0a10PerroMePre, juguete0a10PerroMaPre, juguete10a20Perro, juguete10a20PerroMePre, juguete10a20PerroMaPre, juguete20a30Perro, juguete20a30PerroMePre, juguete20a30PerroMaPre, juguete30aXPerro, juguete30aXPerroMePre, juguete30aXPerroMaPre, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    categoriaGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let gato = db.Producto.findAll({
            include: ["descuentos", "categorias", "tipos_mascota"],
            where: {
                tipo_mascota_id: 1,
            }
        })

        let gatoMenorPrecio = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let gatoMayorPrecio = db.Producto.findAll({
            include: ["descuentos", "categorias"],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'desc']]
        })

        /* ------------------ categorias ------------------- */

        let checkboxComidaGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let checkboxAccesorioGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        
        let checkboxHigieneGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let checkboxJugueteGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        /* ------------------ precios ------------------- */

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']]
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ marcas ------------------- */

        let checkboxCatitGato = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                marca_id: 16
            },
            order: [['precio', 'asc']]
        })

        let checkboxCancatGato = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                marca_id: 4
            },
            order: [['precio', 'asc']]
        })

        let checkboxPurinaGato = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                marca_id: 6
            },
            order: [['precio', 'asc']]
        })

        let checkboxProPlanGato = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                marca_id: 5
            },
            order: [['precio', 'asc']]
        })

        let checkboxOtrasMarcasGato = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                marca_id: {[Op.not]: [4, 5, 6, 16]}
            },
            order: [['precio', 'asc']]
        })

        /* ------------------ productos 20% OFF ------------------- */

        let checkbox20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        /* ------------------ categorias con 20% OFF ------------------- */

        let comida20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let accesorio20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let higiene20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        let juguete20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']]
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ categorias por precio ------------------- */

        /* Accesorios */
        let accesorio0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let accesorio10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* Comida */
        let comida0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let comida10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* Higiene */
        let higiene0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let higiene10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* Juguetes */
        let juguete0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let juguete10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ categorias con 20% OFF y por precio ------------------- */

        /* Accesorios */
        let accesorio0a10Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio10a20Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio20a30Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let accesorio30aXCon20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Comida */
        let comida0a10Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida10a20Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida20a30Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let comida30aXCon20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Higiene */
        let higiene0a10Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene10a20Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene20a30Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let higiene30aXCon20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        /* Juguetes */
        let juguete0a10Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete10a20Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete20a30Con20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let juguete30aXCon20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([gato, gatoMenorPrecio, gatoMayorPrecio, checkboxComidaGato, checkboxAccesorioGato, checkboxHigieneGato, checkboxJugueteGato, de0a10, de10a20, de20a30, de30aX, checkboxCatitGato, checkboxCancatGato, checkboxPurinaGato, checkboxProPlanGato, checkboxOtrasMarcasGato, checkbox20OffGato, comida20OffGato, accesorio20OffGato, higiene20OffGato, juguete20OffGato, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato, accesorio0a10Con20OffGato, accesorio10a20Con20OffGato, accesorio20a30Con20OffGato, accesorio30aXCon20OffGato, comida0a10Con20OffGato, comida10a20Con20OffGato, comida20a30Con20OffGato, comida30aXCon20OffGato, higiene0a10Con20OffGato, higiene10a20Con20OffGato, higiene20a30Con20OffGato, higiene30aXCon20OffGato, juguete0a10Con20OffGato, juguete10a20Con20OffGato, juguete20a30Con20OffGato, juguete30aXCon20OffGato])

        .then(([gato, gatoMenorPrecio, gatoMayorPrecio, checkboxComidaGato, checkboxAccesorioGato, checkboxHigieneGato, checkboxJugueteGato, de0a10, de10a20, de20a30, de30aX, checkboxCatitGato, checkboxCancatGato, checkboxPurinaGato, checkboxProPlanGato, checkboxOtrasMarcasGato, checkbox20OffGato, comida20OffGato, accesorio20OffGato, higiene20OffGato, juguete20OffGato, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato, accesorio0a10Con20OffGato, accesorio10a20Con20OffGato, accesorio20a30Con20OffGato, accesorio30aXCon20OffGato, comida0a10Con20OffGato, comida10a20Con20OffGato, comida20a30Con20OffGato, comida30aXCon20OffGato, higiene0a10Con20OffGato, higiene10a20Con20OffGato, higiene20a30Con20OffGato, higiene30aXCon20OffGato, juguete0a10Con20OffGato, juguete10a20Con20OffGato, juguete20a30Con20OffGato, juguete30aXCon20OffGato]) => {
            res.render('gato.ejs', {gato, gatoMenorPrecio, gatoMayorPrecio, checkboxComidaGato, checkboxAccesorioGato, checkboxHigieneGato, checkboxJugueteGato, de0a10, de10a20, de20a30, de30aX, checkboxCatitGato, checkboxCancatGato, checkboxPurinaGato, checkboxProPlanGato, checkboxOtrasMarcasGato, checkbox20OffGato, comida20OffGato,accesorio20OffGato, higiene20OffGato, juguete20OffGato, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato, accesorio0a10Con20OffGato, accesorio10a20Con20OffGato, accesorio20a30Con20OffGato, accesorio30aXCon20OffGato, comida0a10Con20OffGato, comida10a20Con20OffGato, comida20a30Con20OffGato, comida30aXCon20OffGato, higiene0a10Con20OffGato, higiene10a20Con20OffGato, higiene20a30Con20OffGato, higiene30aXCon20OffGato, juguete0a10Con20OffGato, juguete10a20Con20OffGato, juguete20a30Con20OffGato, juguete30aXCon20OffGato, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });


    },

    promociones : (req, res) => {

        //CON DB SQL
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productosConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
            ]
        })

        let productosConDescuentoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            order: [['precio', 'asc']]
        })

        let productosConDescuentoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            order: [['precio', 'desc']]
        })

        let productosPerroConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let productosGatoConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxAccesorioConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
            ],
            order: [['precio', 'asc']]
        })

        let checkboxComidaConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
            ],
            order: [['precio', 'asc']]
        })

        let checkboxHigieneConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
            ],
            order: [['precio', 'asc']]
        })

        let checkboxJugueteConDescuento = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
            ],
            order: [['precio', 'asc']]
        })

        let de0a10ConDescuento = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20ConDescuento = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30ConDescuento = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXConDescuento = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let comida0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let comida10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let accesorio0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let accesorio10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let higiene0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let higiene10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let juguete0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let juguete10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let comidaOffGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let comidaOffPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let accesoriosOffGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2   /* id accesorio */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let accesoriosOffPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2   /* id accesorio */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let higieneOffGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3   /* id higiene */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let higieneOffPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3   /* id higiene */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let juguetesOffGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4   /* id juguete */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let juguetesOffPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4   /* id juguete */
                    }  
                },
            ],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })


        Promise.all([productosConDescuento, productosConDescuentoMenorPrecio, productosConDescuentoMayorPrecio, productosPerroConDescuento, productosGatoConDescuento, checkboxAccesorioConDescuento, checkboxComidaConDescuento, checkboxHigieneConDescuento, checkboxJugueteConDescuento, de0a10ConDescuento, de10a20ConDescuento, de20a30ConDescuento, de30aXConDescuento, comida0a10, comida10a20, comida20a30, comida30aX, accesorio0a10, accesorio10a20, accesorio20a30, accesorio30aX, higiene0a10, higiene10a20, higiene20a30, higiene30aX, juguete0a10, juguete10a20, juguete20a30, juguete30aX, comidaOffGato, comidaOffPerro, accesoriosOffGato, accesoriosOffPerro, higieneOffGato, higieneOffPerro, juguetesOffGato, juguetesOffPerro, de0a10OffGato, de0a10OffPerro, de10a20OffGato, de10a20OffPerro, de20a30OffGato, de20a30OffPerro, de30aXOffGato, de30aXOffPerro])

        .then(([productosConDescuento, productosConDescuentoMenorPrecio, productosConDescuentoMayorPrecio, productosPerroConDescuento, productosGatoConDescuento, checkboxAccesorioConDescuento, checkboxComidaConDescuento, checkboxHigieneConDescuento, checkboxJugueteConDescuento, de0a10ConDescuento, de10a20ConDescuento, de20a30ConDescuento, de30aXConDescuento, comida0a10, comida10a20, comida20a30, comida30aX, accesorio0a10, accesorio10a20, accesorio20a30, accesorio30aX, higiene0a10, higiene10a20, higiene20a30, higiene30aX, juguete0a10, juguete10a20, juguete20a30, juguete30aX, comidaOffGato, comidaOffPerro, accesoriosOffGato, accesoriosOffPerro, higieneOffGato, higieneOffPerro, juguetesOffGato, juguetesOffPerro, de0a10OffGato, de0a10OffPerro, de10a20OffGato, de10a20OffPerro, de20a30OffGato, de20a30OffPerro, de30aXOffGato, de30aXOffPerro]) => {
            return res.render("promociones.ejs", {userALoguearse, productosConDescuento, productosConDescuentoMenorPrecio, productosConDescuentoMayorPrecio, productosPerroConDescuento, productosGatoConDescuento, checkboxAccesorioConDescuento, checkboxComidaConDescuento, checkboxHigieneConDescuento, checkboxJugueteConDescuento, de0a10ConDescuento, de10a20ConDescuento, de20a30ConDescuento, de30aXConDescuento, comida0a10, comida10a20, comida20a30, comida30aX, accesorio0a10, accesorio10a20, accesorio20a30, accesorio30aX, higiene0a10, higiene10a20, higiene20a30, higiene30aX, juguete0a10, juguete10a20, juguete20a30, juguete30aX, comidaOffGato, comidaOffPerro, accesoriosOffGato, accesoriosOffPerro, higieneOffGato, higieneOffPerro, juguetesOffGato, juguetesOffPerro, de0a10OffGato, de0a10OffPerro, de10a20OffGato, de10a20OffPerro, de20a30OffGato, de20a30OffPerro, de30aXOffGato, de30aXOffPerro})
        })

    },

    promocionesPerro : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Productos con descuento de perro
        let productosConDescuentoPerro = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            }
        })

        let productosConDescuentoPerroMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let productosConDescuentoPerroMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'desc']]
        })

        let checkboxAccesorioConDescuentoPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxComidaConDescuentoPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxHigieneConDescuentoPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxJugueteConDescuentoPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 2,  // ID de perro de SQL
            },
            order: [['precio', 'asc']]
        })

        let de0a10ConDescuentoPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20ConDescuentoPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30ConDescuentoPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXConDescuentoPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let comida0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let comida10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let accesorio0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let accesorio10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let higiene0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let higiene10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let juguete0a10Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let juguete10a20Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete20a30Perro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete30aXPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([productosConDescuentoPerro, productosConDescuentoPerroMenorPrecio, productosConDescuentoPerroMayorPrecio, checkboxAccesorioConDescuentoPerro, checkboxComidaConDescuentoPerro, checkboxHigieneConDescuentoPerro, checkboxJugueteConDescuentoPerro, de0a10ConDescuentoPerro, de10a20ConDescuentoPerro, de20a30ConDescuentoPerro, de30aXConDescuentoPerro, comida0a10Perro, comida10a20Perro, comida20a30Perro, comida30aXPerro, accesorio0a10Perro, accesorio10a20Perro, accesorio20a30Perro, accesorio30aXPerro, higiene0a10Perro, higiene10a20Perro, higiene20a30Perro, higiene30aXPerro, juguete0a10Perro, juguete10a20Perro, juguete20a30Perro, juguete30aXPerro])
            
        .then(([productosConDescuentoPerro, productosConDescuentoPerroMenorPrecio, productosConDescuentoPerroMayorPrecio, checkboxAccesorioConDescuentoPerro, checkboxComidaConDescuentoPerro, checkboxHigieneConDescuentoPerro, checkboxJugueteConDescuentoPerro, de0a10ConDescuentoPerro, de10a20ConDescuentoPerro, de20a30ConDescuentoPerro, de30aXConDescuentoPerro, comida0a10Perro, comida10a20Perro, comida20a30Perro, comida30aXPerro, accesorio0a10Perro, accesorio10a20Perro, accesorio20a30Perro, accesorio30aXPerro, higiene0a10Perro, higiene10a20Perro, higiene20a30Perro, higiene30aXPerro, juguete0a10Perro, juguete10a20Perro, juguete20a30Perro, juguete30aXPerro]) => {
            /* res.send(productosPerroConDescuento) */
            return res.render("promocionesPerro.ejs", {productosConDescuentoPerro, productosConDescuentoPerroMenorPrecio, productosConDescuentoPerroMayorPrecio, checkboxAccesorioConDescuentoPerro, checkboxComidaConDescuentoPerro, checkboxHigieneConDescuentoPerro, checkboxJugueteConDescuentoPerro, de0a10ConDescuentoPerro, de10a20ConDescuentoPerro, de20a30ConDescuentoPerro, de30aXConDescuentoPerro, comida0a10Perro, comida10a20Perro, comida20a30Perro, comida30aXPerro, accesorio0a10Perro, accesorio10a20Perro, accesorio20a30Perro, accesorio30aXPerro, higiene0a10Perro, higiene10a20Perro, higiene20a30Perro, higiene30aXPerro, juguete0a10Perro, juguete10a20Perro, juguete20a30Perro, juguete30aXPerro, userALoguearse})
        })
        
    },

    promocionesGato : (req, res) => {

        //CON DB SQL
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productosConDescuentoGato = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],       
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            }/* ,
            limit: 4 */
        })

        let productosConDescuentoGatoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let productosConDescuentoGatoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            },
            {
                model: db.Categoria,
                as: 'categorias',
            }],
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'desc']]
        })

        let checkboxAccesorioConDescuentoGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 2  /* id accesorio */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxComidaConDescuentoGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 1   /* id comida */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxHigieneConDescuentoGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 3  /* id higiene */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let checkboxJugueteConDescuentoGato = db.Producto.findAll({
            include: [
                {
                    model: db.Descuento,
                    as: 'descuentos',
                    where: {
                        id: 2 // ID descuento de SQL
                    }
                },
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {
                        id: 4  /* id juguete */
                    }
                },
            ],       
            where: {
                tipo_mascota_id: 1,  // ID de gato de SQL
            },
            order: [['precio', 'asc']]
        })

        let de0a10ConDescuentoGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20ConDescuentoGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30ConDescuentoGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aXConDescuentoGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let comida0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let comida10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let comida30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let accesorio0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let accesorio10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let accesorio30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let higiene0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let higiene10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let higiene30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        let juguete0a10Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let juguete10a20Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete20a30Gato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let juguete30aXGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }  
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([productosConDescuentoGato, productosConDescuentoGatoMenorPrecio, productosConDescuentoGatoMayorPrecio, checkboxAccesorioConDescuentoGato, checkboxComidaConDescuentoGato, checkboxHigieneConDescuentoGato, checkboxJugueteConDescuentoGato, de0a10ConDescuentoGato, de10a20ConDescuentoGato, de20a30ConDescuentoGato, de30aXConDescuentoGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato])
   
        .then(([productosConDescuentoGato, productosConDescuentoGatoMenorPrecio, productosConDescuentoGatoMayorPrecio, checkboxAccesorioConDescuentoGato, checkboxComidaConDescuentoGato, checkboxHigieneConDescuentoGato, checkboxJugueteConDescuentoGato, de0a10ConDescuentoGato, de10a20ConDescuentoGato, de20a30ConDescuentoGato, de30aXConDescuentoGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato]) => {
            return res.render("promocionesGato.ejs", {productosConDescuentoGato, productosConDescuentoGatoMenorPrecio, productosConDescuentoGatoMayorPrecio, checkboxAccesorioConDescuentoGato, checkboxComidaConDescuentoGato, checkboxHigieneConDescuentoGato, checkboxJugueteConDescuentoGato, de0a10ConDescuentoGato, de10a20ConDescuentoGato, de20a30ConDescuentoGato, de30aXConDescuentoGato, comida0a10Gato, comida10a20Gato, comida20a30Gato, comida30aXGato, accesorio0a10Gato, accesorio10a20Gato, accesorio20a30Gato, accesorio30aXGato, higiene0a10Gato, higiene10a20Gato, higiene20a30Gato, higiene30aXGato, juguete0a10Gato, juguete10a20Gato, juguete20a30Gato, juguete30aXGato, userALoguearse})
        })

    },

    comidaPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let comidaPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        
        })

        let comidaPerroMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']],
        
        })

        let comidaPerroMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']],
        
        })

        let comida20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1  /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([comidaPerro, comidaPerroMenorPrecio, comidaPerroMayorPrecio, comida20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro])
            
        .then(([comidaPerro, comidaPerroMenorPrecio, comidaPerroMayorPrecio, comida20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro]) => {
            return res.render('perroComida.ejs', {comidaPerro, comidaPerroMenorPrecio, comidaPerroMayorPrecio, comida20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
        
        
    },

    comidaGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let comidaGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        

        let comidaGatoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']],
        
        })

        let comidaGatoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'desc']],
        
        })

        let comida20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1  /* id comida */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 1   /* id comida */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([comidaGato, comidaGatoMenorPrecio, comidaGatoMayorPrecio, comida20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato])
            
        .then(([comidaGato, comidaGatoMenorPrecio, comidaGatoMayorPrecio, comida20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato]) => {
            return res.render('gatoComida.ejs', {comidaGato, comidaGatoMenorPrecio, comidaGatoMayorPrecio, comida20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });

    },

    accesoriosPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let accesoriosPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        })

        let accesoriosPerroMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']],
        
        })

        let accesoriosPerroMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']],
        
        })

        let accesorios20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  /* id perro */
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([accesoriosPerro, accesoriosPerroMenorPrecio, accesoriosPerroMayorPrecio, accesorios20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro])
            
        .then(([accesoriosPerro, accesoriosPerroMenorPrecio, accesoriosPerroMayorPrecio, accesorios20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro]) => {
            return res.render('perroAccesorios.ejs', {accesoriosPerro, accesoriosPerroMenorPrecio, accesoriosPerroMayorPrecio, accesorios20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    accesoriosGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let accesoriosGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',    
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let accesoriosGatoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']],
        
        })

        let accesoriosGatoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'desc']],
        
        })

        let accesorios20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2  /* id accesorio */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 2   /* id accesorio */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([accesoriosGato, accesoriosGatoMenorPrecio, accesoriosGatoMayorPrecio, accesorios20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato])

        .then(([accesoriosGato, accesoriosGatoMenorPrecio, accesoriosGatoMayorPrecio, accesorios20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato]) => {
            return res.render('gatoAccesorios.ejs', {accesoriosGato, accesoriosGatoMenorPrecio, accesoriosGatoMayorPrecio, accesorios20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, userALoguearse});
        })
        .catch(function (error){
            console.error('Error al recuperar productos', error);
        });
    },

    higienePerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let higienePerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        })

        let higienePerroMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']],
        
        })

        let higienePerroMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']],
        
        })

        let higiene20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2, /* id perro */
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([higienePerro, higienePerroMenorPrecio, higienePerroMayorPrecio, higiene20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro])
            
        .then(([higienePerro, higienePerroMenorPrecio, higienePerroMayorPrecio, higiene20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro]) => {
            return res.render('perroHigiene.ejs', {higienePerro, higienePerroMenorPrecio, higienePerroMayorPrecio, higiene20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    higieneGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let higieneGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let higieneGatoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']],
        
        })

        let higieneGatoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'desc']],
        
        })

        let higiene20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3  /* id higiene */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 3   /* id higiene */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([higieneGato, higieneGatoMenorPrecio, higieneGatoMayorPrecio, higiene20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato])
            
        .then(([higieneGato, higieneGatoMenorPrecio, higieneGatoMayorPrecio, higiene20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato]) => {
            return res.render('gatoHigiene.ejs', {higieneGato, higieneGatoMenorPrecio, higieneGatoMayorPrecio, higiene20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    juguetesPerro : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let juguetesPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            }/* ,
            limit: 4 */
        })

        let juguetesPerroMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'asc']],
        
        })

        let juguetesPerroMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
            },
            order: [['precio', 'desc']],
        
        })

        let juguetes20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,  /* id perro */
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffPerro = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 2,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([juguetesPerro, juguetesPerroMenorPrecio, juguetesPerroMayorPrecio, juguetes20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro])
            
        .then(([juguetesPerro, juguetesPerroMenorPrecio, juguetesPerroMayorPrecio, juguetes20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro]) => {
            return res.render('perroJuguetes.ejs', {juguetesPerro, juguetesPerroMenorPrecio, juguetesPerroMayorPrecio, juguetes20OffPerro, de0a10, de10a20, de20a30, de30aX, de0a10OffPerro, de10a20OffPerro, de20a30OffPerro, de30aXOffPerro, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    juguetesGato : (req, res) => {

        const userALoguearse = req.session.userLogueado

        let juguetesGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            }/* ,
            limit: 4 */
        })

        let juguetesGatoMenorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'asc']],
        
        })

        let juguetesGatoMayorPrecio = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
            },
            order: [['precio', 'desc']],
        
        })

        let juguetes20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4  /* id juguete */
                }
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
            }
        })

        let de0a10 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                }  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        /* ------------------ precios con 20% OFF ------------------- */

        let de0a10OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            /* order: [['precio', 'asc']], */
        })

        let de10a20OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de20a30OffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            /* order: [['precio', 'asc']], */
        })

        let de30aXOffGato = db.Producto.findAll({
            include: [{
                model: db.Categoria,
                as: 'categorias',
                where: {
                    id: 4   /* id juguete */
                } 
            },
            {
                model: db.Descuento,
                as: 'descuentos',
                where: {
                    id: 2 // ID descuento de SQL
                }
            }],
            where: {
                tipo_mascota_id: 1,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            /* order: [['precio', 'asc']], */
        })

        Promise.all([juguetesGato, juguetesGatoMenorPrecio, juguetesGatoMayorPrecio, juguetes20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato])
            
        .then(([juguetesGato, juguetesGatoMenorPrecio, juguetesGatoMayorPrecio, juguetes20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato]) => {
            return res.render('gatoJuguetes.ejs', {juguetesGato, juguetesGatoMenorPrecio, juguetesGatoMayorPrecio, juguetes20OffGato, de0a10, de10a20, de20a30, de30aX, de0a10OffGato, de10a20OffGato, de20a30OffGato, de30aXOffGato, userALoguearse});
        })
        .catch(error => {
            console.error('Error al recuperar productos', error);
        });
    },

    marcas: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let eukanuba = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let proplan = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let royal = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let cancat = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 4
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        let catit = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 16
            },
            include: [{
                model: db.Descuento,
                as: 'descuentos',
            }],
            limit: 4
        })

        Promise.all([eukanuba, proplan, royal, cancat, catit])

        .then(([eukanuba, proplan, royal, cancat, catit]) => {
            return res.render("marcas.ejs", {userALoguearse, eukanuba, proplan, royal, cancat, catit})
        })

    },

    eukanuba: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let eukanuba = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let eukanubaMenorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let eukanubaMayorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 12,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([eukanuba, eukanubaMenorPrecio, eukanubaMayorPrecio, de0a10, de10a20, de20a30, de30aX])
            
        .then(([eukanuba, eukanubaMenorPrecio, eukanubaMayorPrecio, de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("productosEukanuba.ejs", {eukanuba, eukanubaMenorPrecio, eukanubaMayorPrecio, de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    proplan: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let proplan = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let proplanMenorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let proplanMayorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 5,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 5,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 5,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 5,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 5,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([proplan, proplanMenorPrecio, proplanMayorPrecio, de0a10, de10a20, de20a30, de30aX])
            
        .then(([proplan, proplanMenorPrecio, proplanMayorPrecio, de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("productosProPlan.ejs", {proplan, proplanMenorPrecio, proplanMayorPrecio, de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    royal: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let royal = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]
        
        })

        let royalMenorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'asc']],
        
        })

        let royalMayorPrecio = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 11,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            order: [['precio', 'desc']],
        
        })

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 11,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 11,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 11,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 11,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([royal, royalMenorPrecio, royalMayorPrecio, de0a10, de10a20, de20a30, de30aX])
            
        .then(([royal, royalMenorPrecio, royalMayorPrecio, de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("productosRoyal.ejs", {royal, royalMenorPrecio, royalMayorPrecio, de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    purinacatchow: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let ProductosPurinaCatChow = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 6,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]/* ,
            limit: 4 */
        
        })

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 12,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([ProductosPurinaCatChow, de0a10, de10a20, de20a30, de30aX])
            
        .then(([ProductosPurinaCatChow, de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("marcasTodas.ejs", {ProductosPurinaCatChow, de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    cancat: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let ProductosCancatVisible = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 4,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]/* ,
            limit: 4 */
        
        })

        /* let ProductosCancatInvisible = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 4,
                id: {[Op.gt]: 73}
            }
        }) */

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 4,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 4,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 4,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 4,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([ProductosCancatVisible, /* ProductosCancatInvisible, */ de0a10, de10a20, de20a30, de30aX])
            
        .then(([ProductosCancatVisible, /* ProductosCancatInvisible, */ de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("marcasTodas.ejs", {ProductosCancatVisible, /* ProductosCancatInvisible, */ de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    catit: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let ProductosCatitVisible = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            where: {
                marca_id: 16,
            },
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }]/* ,
            limit: 4 */
        
        })

        /* let ProductosCatitInvisible = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 16,
                id: {[Op.gt]: 23}
            }
        }) */

        let de0a10 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 16,
                precio: {[Op.lte]: 10}  /* Less than or equal to */
            },
            order: [['precio', 'asc']],
        })

        let de10a20 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 16,
                precio: {[Op.between]: [11, 20]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de20a30 = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 16,
                precio: {[Op.between]: [21, 30]}, /* between */
            },
            order: [['precio', 'asc']],
        })

        let de30aX = db.Producto.findAll({
            include: ["tipos_mascota", "marcas"],
            include: [{
                model: db.Categoria,
                as: 'categorias',  
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],
            where: {
                marca_id: 16,
                precio: {[Op.gt]: 30}, /* Greater than */
            },
            order: [['precio', 'asc']],
        })

        Promise.all([ProductosCatitVisible, /* ProductosCatitInvisible, */ de0a10, de10a20, de20a30, de30aX])
            
        .then(([ProductosCatitVisible, /* ProductosCatitInvisible, */ de0a10, de10a20, de20a30, de30aX]) => {

            return res.render("marcasTodas.ejs", {ProductosCatitVisible, /* ProductosCatitInvisible, */ de0a10, de10a20, de20a30, de30aX, userALoguearse})})
    },

    alta2: (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        //Productos con descuento de perro
        let productos = db.Producto.findAll();
        let tipos = db.TipoMascota.findAll();
        let marcas = db.Marca.findAll();
        let categorias = db.Categoria.findAll();
        let descuentos = db.Descuento.findAll();

        Promise.all([productos, tipos, marcas, categorias, descuentos])
        .then(([editarProducto, tipos, marcas, categorias, descuentos]) => {
                return res.render('alta-producto.ejs', {editarProducto, tipos, marcas, categorias, descuentos, userALoguearse})
        })
    },

    crearProducto2: function (req,res) {

       //usuario q se loguea
       const userALoguearse = req.session.userLogueado

       db.Producto.create(
           {
               nombre: req.body.nombre_producto,
               descripcion: req.body.descripcion,
               color: req.body.color_producto,
               peso: req.body.peso_producto,
               precio: req.body.precio_producto,
               imagen: req.file != undefined ? req.file.filename : "/img/Producto.webp",
               tipo_mascota_id: req.body.tipo_mascota_id,
               marca_id: req.body.marca_id,
            })
            
        .then(() => {res.redirect("/")})
    },

    editar : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let productos = db.Producto.findByPk(productoId, {
            include: [{
                model: db.TipoMascota,
                as: 'tipos_mascota',
            },
            {
                model: db.Marca,
                as: 'marcas',
            },
            {
                model: db.Categoria,
                as: 'categorias',
            },
            {
                model: db.Descuento,
                as: 'descuentos',
            }],

        });
        let tipos = db.TipoMascota.findAll();
        let marcas = db.Marca.findAll();
        let categorias = db.Categoria.findAll();
        let descuentos = db.Descuento.findAll();

        Promise.all([productos, tipos, marcas, categorias, descuentos])
        .then(([editarProducto, tipos, marcas, categorias, descuentos]) => {
            return res.render("editar-producto.ejs", {editarProducto, tipos, marcas, categorias, descuentos, userALoguearse})})
        .catch(error => res.send(error))
    },

    editarProducto: function (req,res) {

         //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        db.Producto.update(
            {
                nombre: req.body.nombre_producto,
                descripcion: req.body.descripcion,
                color: req.body.color_producto,
                peso: req.body.peso_producto,
                precio: req.body.precio_producto,
                imagen: req.file !=undefined ? req.file.filename : productoId.imagen,
                tipo_mascota_id: req.body.tipo_mascota_id,
                marca_id: req.body.marca_id
            },
            {
                where: {id: productoId}
            })
        .then(() => {
            return res.redirect("/")})            
        .catch(error => res.send(error))
    },

    DetalleProductosPerro: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let productosPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let comidaPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let higienePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let accesorioPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let juguetePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })
          
        Promise.all([producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro])

        .then(([producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro]) => {
            return res.render("detalle.ejs", {producto, productosPerro, comidaPerro, higienePerro, accesorioPerro, juguetePerro, userALoguearse})})
        .catch(error => res.send(error))

    },

    DetalleProductosGato: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let productosGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let comidaGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let higieneGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let accesorioGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let jugueteGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })
          
        Promise.all([producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato])

        .then(([producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato]) => {
            return res.render("detalle.ejs", {producto, productosGato, comidaGato, higieneGato, accesorioGato, jugueteGato, userALoguearse})})
        .catch(error => res.send(error))

    },
    
    detalle: (req, res) => {

        const userALoguearse = req.session.userLogueado

        let productoId = req.params.id;

        let producto = db.Producto.findByPk(productoId, {
            include: ["tipos_mascota", 'descuentos', 'categorias']
        })

        let comidaPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let comidaGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 1}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let higienePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let higieneGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 3}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let accesorioPerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let accesorioGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 2}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })

        let juguetePerro = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 2},
            limit: 12
        })

        let jugueteGato = db.Producto.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categorias',
                    where: {id: 4}
                },
                {
                    model: db.Descuento,
                    as: 'descuentos',
                },
                {
                    model: db.TipoMascota,
                    as: 'tipos_mascota',
                }
            ],
            where: {tipo_mascota_id: 1},
            limit: 12
        })
          
        Promise.all([producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato])

        .then(([producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato]) => {
            return res.render("detalle.ejs", {producto, comidaPerro, comidaGato, higienePerro, higieneGato, accesorioPerro, accesorioGato, juguetePerro, jugueteGato, userALoguearse})})
        .catch(error => res.send(error))
    },

    destroy: (req, res) => {

        let productoId = req.params.id;

        db.Producto.destroy({
            where: {
                id: productoId
            },
            force: true   // force: true es para asegurar que se ejecute la acción
        }) 
        .then(() => {
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    },

    buscar: async (req, res) => {
        const userALoguearse = req.session.userLogueado;
    
        try {
            const nombreProducto = req.body.producto;
            const Productos = await db.Producto.findAll({
                where: {
                    nombre: {
                        [Op.iLike]: `%${nombreProducto}%`
                    }
                }
            });
    
            Productos
                ? res.render("busqueda.ejs", { userALoguearse, Productos })
                : res.render("busqueda.ejs", { userALoguearse, Productos: [] });
        } catch (error) {
            console.error('Error en la búsqueda de productos:', error);
            res.status(500).send('Error en la búsqueda de productos.');
        }
    }

    /* alta : (req, res) => {

        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        res.render('alta-producto.ejs', {userALoguearse});
    }, */

    /* crearProducto: (req, res) => {

        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    
		// Crear el objeto literal (producto) a sumar al array

        const nuevoProducto = {
             id: productos [productos.length - 1].id +1,
             name: req.body.nombre_producto,
             description: req.body.descripcion ,
             image: req.file!= undefined ? req.file.filename : "No se subió imagen de producto",
             pet: req.body.mascota,
             category: req.body.categoria,
             colors: req.body.color_producto,
             weight: req.body.peso_producto ,
             price: req.body.precio_producto,
             quantity: req.body.cantidad_producto,
             discount: req.body.descuento 
        }

        productos.push(nuevoProducto);
        
       // Sobreescribir el archivo JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

        // Mostrar poducto creado

        res.redirect("/grupo_8_PetShop/src/views/detalles-del-producto.ejs" + nuevoProducto.id)
		
    }, */

    /* quitarProducto : (req, res) => {

        //CON LOS JSONS
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //proceso de eliminación
        productos = productos.filter(producto => {
            return producto.id != req.params.id
        })

        //escribir archivo json
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "))
    }, */

    /* detalle : (req, res) => {
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado */
       /* console.log(usuario) */
        /* const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id */
        /* })

        // filtro de productos perro o gato
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //Conozco el producto que vino por id
        const detalleDeProductoActual = unProducto.id_pet; */
          
       // Función para encontrar 6 productos distintos para recomendados
       /*  let productosRecomendados = [];

        if (detalleDeProductoActual == "Perro") {
            
            //Ecuento el id maximo del json
            let maxID = Math.max(...productosPerro.map(item => item.id));

            //Set de 6 numeros aleatorios no repetidos
            let randomIDs = new Set();
            while (randomIDs.size < 6) {
                randomIDs.add(Math.floor(Math.random() * (maxID - 1)) + 1);
            }
        
            // Convierte los randomIDS a array
            randomIDs = Array.from(randomIDs);
        
            // Filtra los productosPerro según en los IDs aleatorios
            productosRecomendados = productosPerro.filter(item => randomIDs.includes(item.id));
            
            // Si la cantidad de productos recomendados es menor que 6, agrega productos adicionales
            while (productosRecomendados.length < 6) {
                productosRecomendados.push(productosPerro[Math.floor(Math.random() * productosPerro.length)])
        }

    } else if (detalleDeProductoActual == "Gato") {
        
       //encuentro el id máximo en el json
        let maxID= Math.max(...productosGato.map(item => item.id));

        //set de 6 numeros aleatorios no repetidos

        let randomIDS= new Set();
        while(randomIDS <6) {
            randomIDS.add(Math.floor(Math.random() * (maxID - 1)) + 1);
        }

        //Convierto el set en array
        randomIDS = Array.from(randomIDS);

        //filtro los productosGato según los IDS aleatorios
        productosRecomendados = productosGato.filter(item => randomIDS.includes(item.id));

        // Si la cantidad de productos recomendados es menor que 6, agrega productos adicionales
        while (productosRecomendados.length <6)
            productosRecomendados.push(productosGato[Math.floor(Math.random() * productosGato.length)])

        }
        res.render("detalles-del-producto.ejs", {unProducto, productosRecomendados, userALoguearse}); 
    },  */

    /* editarProducto: (req, res) => {
        // json de productos
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //identificador de producto
        const id= req.params.id;
       
        let productoAEditar= productos.find(producto => producto.id == id);

        //Reemplazo de prodcuto

        const edicionProducto = {
            id: productoAEditar.id,
            name: req.body.nombre_producto,
            description: req.body.descripcion ,
            image: req.file !=undefined ? req.file.filename : productoAEditar.image,
            pet: req.body.mascota,
            category: req.body.categoria,
            colors: req.body.color_producto,
            weight: req.body.peso_producto ,
            price: req.body.precio_producto,
            quantity: req.body.cantidad_producto,
            discount: req.body.descuento
       }

       //Posicion producto editar y reemplazo
       let indice = productos.findIndex(producto => {return producto.id});
       productos[indice] = edicionProducto

       //Re-escritura producto
       fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "), "utf-8");
       res.redirect("/") // ¿A donde lo redirigimos?
    }, */

    /* editar : (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        // Json con todos los productos
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        // Encontrar producto
        const editarProducto = productos.find( producto => {
            return producto.id == req.params.id
        })

        res.render('editar-producto.ejs', {editarProducto, userALoguearse});
    }, */

    /* promocionesGato: (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })
        res.render('promociones-gato.ejs', {productosGatoConDescuento, unProducto, userALoguearse});
    }, */

    /* promocionesPerro: (req, res) => { */

        //CON LOS JSONS
        /* //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		
        //ID de producto
        const unProducto = productos.find (producto => {
            return producto.id == req.params.id
        })

        res.render('promociones-perro.ejs', {productosPerroConDescuento, unProducto, userALoguearse});
    }, */

    /* promociones: (req, res) => {

        //CON LOS JSONS
        //usuario q se loguea
        const userALoguearse = req.session.userLogueado

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //productos perros
        const productosPerro = productos.filter(product => {return product.id_pet == "Perro"});
        //productos gatos
        const productosGato = productos.filter(product => {return product.id_pet == "Gato"});

        //productos con descuentos de perros
        const productosPerroConDescuento = productosPerro.filter(product => {return product.discount == "Si"});
		//productos con descuentos de gatos
		const productosGatoConDescuento = productosGato.filter(product => {return product.discount == "Si"});

        res.render('promociones.ejs', {productosPerroConDescuento, productosGatoConDescuento, userALoguearse});
    } */
}

module.exports = productController;