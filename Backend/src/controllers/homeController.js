import db from '../models/index'
import CRUDService from '../services/CRUDService';
let getHomePage =async (req, res) => {
    try {
        let data= await db.User.findAll();
        return res.render('homepage.ejs',{
            data:JSON.stringify(data),
        });
    } catch (error) {
        console.log(e);
    }
   
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
// object: {
//     key: '',
//     value: ''
// }
let postCRUD = async(req, res) => {
    let mess= await CRUDService.createNewUser(req.body);
    console.log(mess);
    return res.send("post crud from server")
}
let getAllCRUD =async(req, res) => {
    let data= await CRUDService.getAllUser();
    console.log(data);
    return res.render("displayCRUD.ejs",{
        dataTable: data
    })
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    getAllCRUD:getAllCRUD,
}