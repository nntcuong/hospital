import db from '../models/index'
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data),
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
let postCRUD = async (req, res) => {
    let mess = await CRUDService.createNewUser(req.body);
    console.log(mess);
    return res.send("post crud from server")
}
let getAllCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render("displayCRUD.ejs", {
        dataTable: data
    })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {

        let userData = await CRUDService.finUserById(userId);
        console.log(userData);
        return res.render("editCRUD.ejs",{
            user : userData,
        })
    }
    else {
        return res.send("No user")
    }
}
let putCRUD = async (req, res) => {
    let data=req.body;
    let allUsers =await CRUDService.updateUser(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
  
}
let deleteCRUD = async (req, res) => {
    let id= req.query.id;
    if(id){
        await CRUDService.deleteUserById(id);
        return res.send("Delete successfully")
    }
    else{
        return res.send("No user")
    }
  
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getAllCRUD: getAllCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}