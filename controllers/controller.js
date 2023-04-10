// controller API Node MySQL




// Models to integrate to DB

const productsModel = require("../models/productsModels")

const getAll = async(req,res) => {
    const produtcs = await productsModel.getAll()
    return res.status(200).json(produtcs)
}



module.exports = {
  getAll
}





// const controller = {}
// var lista = [
//     {
//       "id": 1,
//       "nome": "Notebook Lenovo",
//       "descrição":"Notebook Lenovo Ideapad 3i Intel Celeron 4GB 128GB",
//       "qdade": "55",
//       "valor": "1952"
//     },
//     {
//     "id": 2,
//     "nome": "Impressora Epson",
//     "descrição":"Impressora Multifuncional Epson Ecotank L3250 - Tanque de Tinta Colorida USB Wi-Fi",
//     "qdade": "32",
//     "valor": "1169"
//   },
//   {
//     "id": 3,
//     "nome": "Notebook Acer",
//     "descrição":"Notebook Gamer Acer AMD Ryzen R7-5800H 8GB - 512GB SSD 15,6” Full HD NVIDIA GTX 1650 4GB",
//     "qdade": "23",
//     "valor": "4499"
//   },
//   ]





// controller.register = (req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname+"/..view/register.html"))
// }


// controller.getAll = (req,res)=>{
//   res.status(200).send(lista)
// }



// router.get("/:id", controller.getById)
// router.post("/", controller.create)
// router.put("/:id", controller.update)
// router.delete("/:id", controller.delete)






// module.exports = controller